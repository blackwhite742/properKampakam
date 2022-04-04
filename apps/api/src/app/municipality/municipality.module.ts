import { MunicipalityController } from './municipality.controller';
import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { Municipality } from '../entities/municipality.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Municipality])],
  controllers: [MunicipalityController],
  providers: [MunicipalityService],
  exports:[MunicipalityService,TypeOrmModule]
})
export class MunicipalityModule {}
