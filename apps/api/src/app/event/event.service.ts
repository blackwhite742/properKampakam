import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {

  constructor(
    @InjectRepository(Event)
    private eventRepository:Repository<Event>
  ){

  }

  async getAll(){
    return await this.eventRepository.find({relations:['municipality'],order:{date:"ASC"}});
  }

  async getId(givenId:number){
    return await this.eventRepository.findOneOrFail({where:{id:givenId}});
  }


  //Add
  async add(event:Event){
    return await this.eventRepository.save(event);
  }


}
