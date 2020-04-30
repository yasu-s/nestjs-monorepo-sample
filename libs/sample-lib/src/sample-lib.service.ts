import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleLibService {
  getMessage(): string {
    return 'Sample Lib message';
  }
}
