import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';

@Controller('municipality')
export class MunicipalityController {

  constructor(
    private municipalityService:MunicipalityService
    )
    {

    }

  @Get('/id/:id')
  async getById(
    @Param('id')id:number
  ){
    return this.municipalityService.getById(id);
  }

  @Get('/getAll')
  async getAll(){
    return this.municipalityService.getAll();
  }

  @Get('/getByRegion')
  async getByRegion(){
    return this.municipalityService.getByRegion();
  }

  @Post('/add')
  addRegion(
    @Body()data:any
  ){
    return this.municipalityService.addMunicipality(data);
  }

}
