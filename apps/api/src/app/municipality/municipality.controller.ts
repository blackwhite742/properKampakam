import { Controller, Get, Post, Body } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';

@Controller('municipality')
export class MunicipalityController {

  constructor(
    private municipalityService:MunicipalityService
    )
    {

    }

  @Get('/getAll')
  async getAll(){
    return this.municipalityService.getAll();
  }

  @Post('/add')
  addRegion(
    @Body()data:any
  ){
    return this.municipalityService.addMunicipality(data);
  }

}
