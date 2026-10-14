import { Module } from '@nestjs/common';
import { AssignBookService } from './assign-book.service';
import { AssignBookController } from './assign-book.controller';

@Module({
  controllers: [AssignBookController],
  providers: [AssignBookService],
})
export class AssignBookModule {}
