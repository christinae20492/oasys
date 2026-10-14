import { Test, TestingModule } from '@nestjs/testing';
import { AssignBookService } from './assign-book.service';

describe('AssignBookService', () => {
  let service: AssignBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignBookService],
    }).compile();

    service = module.get<AssignBookService>(AssignBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
