import { Controller, Get, Param } from '@nestjs/common';
import { EventCategoryService } from './event-category.service';

@Controller('eventCategory')
export class EventCategoryController {

  constructor(
    private eventCategoryService:EventCategoryService
  ) {}

  @Get('getAll')
  async getAll(){
    return this.eventCategoryService.getAll();
  }

  @Get('id/:id')
  async getById(
    @Param('id')id:number
  ){
    return this.eventCategoryService.getId(id);
  }

}
