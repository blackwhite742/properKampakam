import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryHasCategoryController } from './entry-has-category.controller';
import { EntryHasCategoryService } from './entry-has-category.service';
import { EntryHasCategory } from '../entities/entryHasCategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntryHasCategory])],
  controllers: [EntryHasCategoryController],
  providers: [EntryHasCategoryService],
  exports: [EntryHasCategoryService,TypeOrmModule]
})
export class EntryHasCategoryModule {
  constructor(private entryHasCategoryServiceService:EntryHasCategoryService){}
}
