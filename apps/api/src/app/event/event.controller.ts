import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from '../entities/event.entity';

@Controller('event')
export class EventController {
  constructor(
    private eventService: EventService
  )
  {

  }

  @Get('/id/:id')
  async getById(
    @Param('id')id:number
  ){
    return this.eventService.getId(id);
  }

  @Get('getAll')
  async getAll(){
    return this.eventService.getAll();
  }

  @Post('add')
  async add(
    @Body()event:Event
  ){
    return this.eventService.add(event);
  }
}
