import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>
  ){}

  async getAll(){
    const ans=await this.tagRepository.find();
    return ans.map((el:any)=>el.name);
  }

}
