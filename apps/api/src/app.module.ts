import { join } from 'path';
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';

import { LogModule } from './lib/log/log.module';
import { ApiModule } from './modules/api.module';
import { options } from './lib/database/database.providers';
import { PaginationModule } from './lib/pagination/pagination.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      // exclude: ['']
    }),
    TypeOrmModule.forRoot(options),
    ScheduleModule.forRoot(),
    ApiModule,
    PaginationModule,
    LogModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
