import { Injectable } from '@nestjs/common';
import { EntryHasCategory } from '../entities/entryHasCategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EntryHasCategoryService {

  constructor(
    @InjectRepository(EntryHasCategory)
    private entryHasCategoryRepository:Repository<EntryHasCategory>
  ){}

  async getAll(){
    return this.entryHasCategoryRepository.find();
  }

  async getUserCategories(id:number){
    const ans = await this.entryHasCategoryRepository.find({where:{entryId:id}});
    const temp = ans.map(el=>el.categoryId);
    return temp;
  }

  async assignPair(entryId:number, categoryId:number){
    return this.entryHasCategoryRepository.save({entryId,categoryId})
  }

  async assignMultipleCategories(entryId:number, categories:number[]){
    categories.forEach(async c =>{
      this.entryHasCategoryRepository.save({entryId,categoryId:c});
    })
    return true;
  }

  async wipeByEntryId(entryId:number){
    const ans=await this.entryHasCategoryRepository.createQueryBuilder()
    .delete()
    .from(EntryHasCategory)
    .where("entry_id = :id",{id:entryId})
    .execute();
    return ans
  }



}
