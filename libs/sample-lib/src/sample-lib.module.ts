import { Module } from '@nestjs/common';
import { SampleLibService } from './sample-lib.service';

@Module({
  providers: [SampleLibService],
  exports: [SampleLibService],
})
export class SampleLibModule {}
