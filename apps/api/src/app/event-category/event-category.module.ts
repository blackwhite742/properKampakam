import { Module } from '@nestjs/common';
import { EventCategoryController } from './event-category.controller';
import { EventCategoryService } from './event-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventCategory } from '../entities/eventCategory.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EventCategory])],
  controllers: [EventCategoryController],
  providers: [EventCategoryService],
  exports: [EventCategoryService,TypeOrmModule]
})
export class EventCategoryModule {}
