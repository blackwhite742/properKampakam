import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryController } from './entry.controller';
import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { Entry } from '../entities/entry.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Entry])],
  controllers:[EntryController],
  providers: [EntryService],
  exports:[EntryService,TypeOrmModule]
})
export class EntryModule {
  constructor(private entryService:EntryService){}
}
