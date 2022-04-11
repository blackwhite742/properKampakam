import { CategoryService } from './category.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('category')
export class CategoryController {

  constructor(
    private categoryService:CategoryService
  ){

  }

  @Get('/getAll')
  async getAll(){
    return this.categoryService.getAll();
  }

  @Post('/add')
  async addCategory(
    @Body()data:any
  ){
    return this.categoryService.add(data);
  }

}
