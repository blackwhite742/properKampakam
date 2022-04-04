For Db config create dbConfig.ts in root folder:


```Typescript
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const DbConfig:Partial<TypeOrmModuleOptions>={
      type:"mysql",
      host:"localhost",
      port:3306,
      username:"root",
      password:...,
      database:...,
  }
```
