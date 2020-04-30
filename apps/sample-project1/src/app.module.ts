import { Module } from '@nestjs/common';

import { SampleLibModule } from '@monorepo-lib/sample-lib';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SampleLibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
