import { Test, TestingModule } from '@nestjs/testing';
import { AssignBookController } from './assign-book.controller';
import { AssignBookService } from './assign-book.service';

describe('AssignBookController', () => {
  let controller: AssignBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignBookController],
      providers: [AssignBookService],
    }).compile();

    controller = module.get<AssignBookController>(AssignBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
