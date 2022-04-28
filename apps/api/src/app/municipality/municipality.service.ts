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

  async getByRegion(){
    const ans=await this.municipalityRepository.find({relations:['region']});
    const obj={};

    for(const ind in ans){
      const curr=ans[ind];
      if(curr.region.name){
        if(!(curr.region.name in obj)){
          obj[curr.region.name]=[{id:curr.id, name:curr.name}];
        }
        else
          obj[curr.region.name].push({id:curr.id, name:curr.name});
      }
    }

    return obj;
  }

  async addMunicipality(data){
    return await this.municipalityRepository.save(data);
  }
}
