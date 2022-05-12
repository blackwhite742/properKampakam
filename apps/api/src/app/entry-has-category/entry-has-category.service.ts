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

  async assignPair(entryId:number, categoryId:number){
    return this.entryHasCategoryRepository.save({entryId,categoryId})
  }

  async assignMultipleCategories(entryId:number, categories:number[]){
    categories.forEach(async c =>{
      this.entryHasCategoryRepository.save({entryId,categoryId:c});
    })
    return true;
  }

}
