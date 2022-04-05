import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {

  constructor(
    private regionService:RegionService
  ){

  }

  @Get('/getAll')
  getAll(){
    return this.regionService.getAll();
  }

  @Post('/addRegion')
  addRegion(
    @Body()data:any
  ){
    return this.regionService.addRegion(data);
  }
}
