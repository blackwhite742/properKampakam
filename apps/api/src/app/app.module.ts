import { EntryService } from './entry/entry.service';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntryController } from './entry/entry.controller';
import { EntryModule } from './entry/entry.module';
import { Entry } from './entities/entry.entity';
import { getConnectionOptions } from 'typeorm';


const dbConfig:TypeOrmModuleOptions={
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mihap',
  database: 'mydb',
  entities: ["entities/*.js"],
  synchronize: true,
  autoLoadEntities:true,
  logging:true
}


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"mysql",
      host:"localhost",
      port:3306,
      username:"root",
      password:"mihap",
      database:"mydb",
      entities:[Entry],
      synchronize:true,
      autoLoadEntities:true
    }),
    EntryModule,
  ],
  controllers: [AppController,EntryController],
  providers: [AppService,EntryService],
})
export class AppModule {}
