import { Injectable } from '@nestjs/common';
import { CreateAssignBookDto } from './dto/create-assign-book.dto';
import { UpdateAssignBookDto } from './dto/update-assign-book.dto';

@Injectable()
export class AssignBookService {
  create(createAssignBookDto: CreateAssignBookDto) {
    return 'This action adds a new assignBook';
  }

  findAll() {
    return `This action returns all assignBook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assignBook`;
  }

  update(id: number, updateAssignBookDto: UpdateAssignBookDto) {
    return `This action updates a #${id} assignBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignBook`;
  }
}
