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
    return ans
  }

  async getRandom(){
    return await this.entryRepository.query('SELECT id FROM entry ORDER BY RAND() LIMIT 1');
  }

  async addEntry(data){
    console.log(data);
    return await this.entryRepository.save(data);
  }

}
