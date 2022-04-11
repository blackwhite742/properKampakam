import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from '../entities/entry.entity';



@Injectable()
export class EntryService {

  constructor(
    @InjectRepository(Entry)
    private entryRepository:Repository<Entry>
  ){

  }

  async getAll(){
    const ans=await this.entryRepository.find();
    console.log(ans)
    return ans
  }

  async getId(givenId){
    const ans=await this.entryRepository.findOneOrFail({where:{id:givenId}});
    console.log(ans)
    return ans
  }

  async addEntry(data){
    return await this.entryRepository.save(data);
  }

}
