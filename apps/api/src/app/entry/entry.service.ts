import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from '../entities/entry.entity';
import { DbEntry } from '../interfaces/entry.interface';
import { EntryHasCategoryService } from '../entry-has-category/entry-has-category.service';



@Injectable()
export class EntryService {

  constructor(
    @InjectRepository(Entry)
    private entryRepository:Repository<Entry>,

    private entryHasCategoryService:EntryHasCategoryService
  ){

  }

  async getAll(){
    //const ans:any=await this.entryRepository.find({relations:['municipality','entry_has_category','category']});
    return await this.entryRepository.find({relations:['tags']});

    /* const query = this.entryRepository.createQueryBuilder('e');

    query.innerJoinAndSelect("municipality", "m", "m.id=e.municipality_id");
    query.innerJoin("entry_has_category", "ehc", "ehc.entry_id=e.id");
    query.innerJoinAndSelect("category","c","c.id=ehc.category_id");
    return await query.getRawMany(); */
  }

  async getId(givenId){
    const ans:Entry=await this.entryRepository.findOneOrFail({relations:["tags"],where:{id:givenId}});

    const temp1:boolean=ans.accessibility?true:false;
    const temp2:boolean=ans.accomodation?true:false;
    const temp3:boolean=ans.price?true:false;

    //Needed to force boolean data type instead of interpreting it as number (Subsequent trouble with PrimeNg component)
    return {
      id:ans.id,
      name:ans.name,
      location:ans.location,
      price:temp3,
      accessibility:temp1,
      accomodation:temp2,
      season:ans.season,
      description:ans.description,
      image:ans.image,
      municipalityId:ans.municipalityId,
      tags:ans.tags
    } as Entry
  }

  async getByIdWithCategory(id:number){
    //TODO merge with getId function (optional params)

    const ans:Entry=await this.entryRepository.findOneOrFail({where:{id}});
    const cats:any=await this.entryHasCategoryService.getUserCategories(id);
    const temp1:boolean=ans.accessibility?true:false;
    const temp2:boolean=ans.accomodation?true:false;
    const temp3:boolean=ans.price?true:false;

    const catIds:number[]=[];
    cats.forEach(el=>{
      catIds.push(el["categoryId"]);
    })

    return {
      id:ans.id,
      name:ans.name,
      location:ans.location,
      price:temp3,
      accessibility:temp1,
      accomodation:temp2,
      season:ans.season,
      description:ans.description,
      image:ans.image,
      municipalityId:ans.municipalityId,
      categories:catIds
    }
    return ans;
  }

  async getRandom(){
    return await this.entryRepository.query('SELECT id FROM entry ORDER BY RAND() LIMIT 1');
  }

  async getSpecific(data:Partial<DbEntry>){

    const query=this.entryRepository.createQueryBuilder('e');

    query.distinct(true);


    //Relations
    query.innerJoinAndSelect("municipality","m", "m.id = e.municipality_id");
    query.innerJoinAndSelect("region","r", "r.id = m.region_id");
    query.leftJoin("entry_has_category","ehc","ehc.entry_id = e.id");



    //Data filtering

    //Name always gets passed
    query.where("e.name LIKE :name",{name:`%${data.name}%`});

    if(data.regions != undefined ){
      // No specific municipality is chosen
      if(data.municipality == undefined || data.municipality.length == 0)
        query.andWhere("r.id = :id",{id:data.regions});
      else
        query.andWhere("e.municipality_id IN(:...ids)",{ids:data.municipality})
    }

    if(data.accessibility != undefined){
      query.andWhere("e.accessibility = :accessibility",{accessibility:data.accessibility});
    }

    if(data.accommodation != undefined){
      query.andWhere("e.accomodation = :accommodation",{accommodation:data.accommodation}); //TODO fix typo in db
    }

    if(data.price != undefined){
      query.andWhere("e.price = :price",{price:data.price});
    }

    if(data.season){
      query.andWhere("e.season = :season",{season:data.season});
    }

    if(data.categories){
      query.andWhere("ehc.category_id IN(:...ids)",{ids:data.categories});
    }

    //console.log(query.getQuery());


    return await query.getRawMany();

  }

  async addEntry(data){
    const temp:number[]=data.categories;
    const ans=await this.entryRepository.save(data);
    await this.entryHasCategoryService.assignMultipleCategories(ans.id,temp);
    return ans;
  }


  //Patch
  async editEntry(data:DbEntry){
    //TODO FIX edit
    //console.log("Patch recieved data: ",data);
    const entryObj:any={...data};
    delete entryObj.categories

    if(data.id && data.categories){
      this.entryRepository.update(data.id,entryObj as Entry);
      await this.entryHasCategoryService.wipeByEntryId(data.id);
      this.entryHasCategoryService.assignMultipleCategories(data.id,data.categories as number[]);
    }
    return true;
  }

}
