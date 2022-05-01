import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';

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
}
