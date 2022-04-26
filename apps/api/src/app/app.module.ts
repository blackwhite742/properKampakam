import { EntryService } from './entry/entry.service';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryController } from './entry/entry.controller';
import { EntryModule } from './entry/entry.module';

import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { MunicipalityController } from './municipality/municipality.controller';
import { RegionModule } from './region/region.module';
import { RegionController } from './region/region.controller';
import { MunicipalityModule } from './municipality/municipality.module';
import { DbConfig } from 'dbConfig'


import {Category} from './entities/category.entity';
import {Municipality} from './entities/municipality.entity';
import {Entry} from './entities/entry.entity';
import {Region} from './entities/region.entity';
import {MainCategory} from './entities/mainCategory.entity';

/*
import { Category } from './entities/category.entity';
import { Municipality } from './entities/municipality.entity';
import { Entry } from './entities/entry.entity';
import { Region } from './entities/region.entity';
import { MainCategory } from './entities/mainCategory.entity';
*/

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DbConfig,
      entities:[Entry,Category,Municipality,Region,MainCategory],
      synchronize:true,
      autoLoadEntities:true
    }),
    EntryModule,
    CategoryModule,
    MunicipalityModule,
    RegionModule,
  ],
  controllers: [AppController,EntryController, CategoryController, MunicipalityController, RegionController],
  providers: [AppService,EntryService],
})
export class AppModule {}
