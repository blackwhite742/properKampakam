import { Controller, Get } from '@nestjs/common';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {

  constructor(
    private regionService:RegionService
  ){

  }

  @Get('/getAll')
  async getAll(){
    return this.regionService.getAll();
  }
}
