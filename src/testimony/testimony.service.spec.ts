import { Test, TestingModule } from '@nestjs/testing';
import { TestimonyService } from './testimony.service';

describe('TestimonyService', () => {
  let service: TestimonyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestimonyService],
    }).compile();

    service = module.get<TestimonyService>(TestimonyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
