import { Controller, Get } from '@nestjs/common';
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
    console.log("Get all");
    return this.municipalityService.getAll();
  }

}
