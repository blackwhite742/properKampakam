import { EntryService } from './entry.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('entry')
export class EntryController {

  constructor(
    private entryService:EntryService
  ){

  }

  @Get('/id/:id')
  async getById(
    @Param('id')id:number
  ){
    console.log("Get by id",id);
    return this.entryService.getId(id);
  }

  @Get('/getAll')
  async getAll(){
    console.log("Get all");
    return this.entryService.getAll();
  }
  /*
  @Get('/random')
  async getRandom(){
    return this.entryService.getRandom();
  }*/

  @Post('/add')
  addRegion(
    @Body()data:any
  ){
    return this.entryService.addEntry(data);
  }

}
