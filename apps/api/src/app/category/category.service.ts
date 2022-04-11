import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository:Repository<Category>
  ){

  }

  async getAll(){
    return await this.categoryRepository.find();
  }

  async add(data){
    return await this.categoryRepository.save(data);
  }

}
