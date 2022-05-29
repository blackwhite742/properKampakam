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

  async getAllCount(){
    const query=this.tagRepository.createQueryBuilder('t');
    query.select(['t.name AS name','Count(t.name)*1 AS count']);
    query.innerJoin("entry_has_tag","eht","eht.tag_name=t.name");
    query.groupBy("t.name");
    query.orderBy("count","DESC");
    const ans:{name:string,count:number}[]=await query.getRawMany();
    ans.map(el=>el.count=el.count*1); // Force it to return number instead of string
    return ans;
  }

}
