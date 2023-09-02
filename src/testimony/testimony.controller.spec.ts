import { Test, TestingModule } from '@nestjs/testing';
import { TestimonyController } from './testimony.controller';

describe('TestimonyController', () => {
  let controller: TestimonyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestimonyController],
    }).compile();

    controller = module.get<TestimonyController>(TestimonyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
