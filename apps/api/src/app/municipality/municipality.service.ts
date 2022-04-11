import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipality } from '../entities/municipality.entity';

@Injectable()
export class MunicipalityService {

  constructor(
    @InjectRepository(Municipality)
    private municipalityRepository:Repository<Municipality>
  ){

  }

  async getAll(){
    return await this.municipalityRepository.find();
  }

  async addMunicipality(data){
    return await this.municipalityRepository.save(data);
  }
}
