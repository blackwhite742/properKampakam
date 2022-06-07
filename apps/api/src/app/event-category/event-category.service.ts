import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventCategory } from '../entities/eventCategory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventCategoryService {

  constructor(
    @InjectRepository(EventCategory)
    private eventCategoryRepository:Repository<EventCategory>
  ) { }

  async getAll(){
    return await this.eventCategoryRepository.find();
  }

  async getId(id:number){
    return await this.eventCategoryRepository.findOneOrFail({where:{id}});
  }


}
