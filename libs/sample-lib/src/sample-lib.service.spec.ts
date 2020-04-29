import { Test, TestingModule } from '@nestjs/testing';
import { SampleLibService } from './sample-lib.service';

describe('SampleLibService', () => {
  let service: SampleLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleLibService],
    }).compile();

    service = module.get<SampleLibService>(SampleLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
