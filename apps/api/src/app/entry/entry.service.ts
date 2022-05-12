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
    const ans=await this.entryRepository.find();
    return ans
  }

  async getId(givenId){
    const ans=await this.entryRepository.findOneOrFail({where:{id:givenId}});
    return ans
  }

  async getRandom(){
    return await this.entryRepository.query('SELECT id FROM entry ORDER BY RAND() LIMIT 1');
  }

  async getSpecific(data:Partial<DbEntry>){

    const query=this.entryRepository.createQueryBuilder('e');



    //Relations
    query.innerJoin("municipality","m", "m.id = e.municipality_id");
    query.innerJoin("region","r", "r.id = m.region_id");
    query.leftJoin("entry_has_category","ehc","ehc.entry_id = e.id");


    //Data filtering

    //Name always gets passed
    query.where("e.name LIKE :name",{name:`%${data.name}%`});

    if(data.regions != undefined ){
      // No specific municipality is chosen
      if(data.municipality == undefined)
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


    return await query.getRawMany(); //Distinct?

  }

  async addEntry(data){
    const temp:number[]=data.categories;
    const ans=await this.entryRepository.save(data);
    await this.entryHasCategoryService.assignMultipleCategories(ans.id,temp);
    return ans;
  }

}
