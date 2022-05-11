import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryController } from './entry.controller';
import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { Entry } from '../entities/entry.entity';
import { EntryHasCategoryModule } from '../entry-has-category/entry-has-category.module';


@Module({
  imports:[TypeOrmModule.forFeature([Entry]),EntryHasCategoryModule],
  controllers:[EntryController],
  providers: [EntryService],
  exports:[EntryService,TypeOrmModule]
})
export class EntryModule {
  constructor(private entryService:EntryService){}
}
