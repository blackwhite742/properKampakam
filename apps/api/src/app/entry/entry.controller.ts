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
    return this.entryService.getId(id);
  }

  @Get('/getWithCat/:id')
  async getWithCat(
    @Param('id')id:number
  ){
    return this. entryService.getByIdWithCategory(id);
  }

  @Get('/getAll')
  async getAll(){
    return this.entryService.getAll();
  }

  @Get('/random')
  async getRandom(){
    return this.entryService.getRandom();
  }

  @Post('query')
  async getSpecific(
    @Body()data:any
  ){
    return this.entryService.getSpecific(data);
  }

  @Post('/add')
  addRegion(
    @Body()data:any
  ){
    return this.entryService.addEntry(data);
  }

}
