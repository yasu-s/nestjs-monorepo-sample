import { Controller, Get } from '@nestjs/common';

import { SampleLibService } from '@monorepo-lib/sample-lib';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly sampleLibService: SampleLibService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('message')
  getMessage(): string {
    return this.sampleLibService.getMessage();
  }
}
