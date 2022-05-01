import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import {Event} from '../entities/event.entity';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService,TypeOrmModule]
})
export class EventModule {}
