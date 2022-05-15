import { Controller, Get, Query ,Param, Delete } from '@nestjs/common';
import { EntryHasCategoryService } from './entry-has-category.service';

@Controller('entryHasCategory')
export class EntryHasCategoryController {

  constructor(
    private entryHasCategoryService: EntryHasCategoryService
  )
  {}

  @Get('assign')
  async assignPair(
    @Query('entryId')entryId:number,
    @Query('categoryId')categoryId:number
  ){
    return await this.entryHasCategoryService.assignPair(entryId, categoryId);
  }

  @Get('allPairs')
  async getAllPairs(){
    return await this.entryHasCategoryService.getAll();
  }

  @Delete('wipeByEntryId/:id')
  async wipeByEntryId(
    @Param('id')id:number
  ){
    return await this.entryHasCategoryService.wipeByEntryId(id);
  }

}
