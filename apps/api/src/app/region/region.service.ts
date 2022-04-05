import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from '../entities/region.entity';

@Injectable()
export class RegionService {

  constructor(
    @InjectRepository(Region)
    private regionRepository:Repository<Region>
  ){

  }

  async getAll(){
    return await this.regionRepository.find();
  }

  async addRegion(data){
    return await this.regionRepository.save(data)
  }

}
