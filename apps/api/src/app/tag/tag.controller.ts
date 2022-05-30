import { Controller, Get, Delete, Body } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(
    private tagService: TagService
  ){}

  @Get('getAll')
  getAll(){
    return this.tagService.getAll();
  }

  @Get('getAllCount')
  getAllCount(){
    return this.tagService.getAllCount();
  }

  @Delete('dropTagsByEntryId')
  dropTags(
    @Body()id:number
  ){
    return this.tagService.dropTagsByEntryId(id);
  }

}
