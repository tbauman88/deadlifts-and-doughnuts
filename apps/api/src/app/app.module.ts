import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoughnutsService } from './doughnuts/doughnuts.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DoughnutsService]
})
export class AppModule {}
