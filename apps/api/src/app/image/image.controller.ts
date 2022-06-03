import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';
import { Image } from '../entities/image.entity';

@Controller('image')
export class ImageController {

  constructor(
    private imageService:ImageService
  ){}

  @Get('getAll')
  getAll(){
    return this.imageService.getAll();
  }

  @Get('id/:id')
  getById(
    @Param('id')id:number
  ){
    return this.imageService.getById(id);
  }

  @Get('entry/:id')
  getEntryImages(
    @Param('id')id:number
  ){
    return this.imageService.getEntryImages(id);
  }

  @Post('save')
  saveImage(
    @Body()data:Image
  ){
    return this.imageService.saveImage(data);
  }




}
