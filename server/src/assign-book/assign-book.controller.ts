import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssignBookService } from './assign-book.service';
import { CreateAssignBookDto } from './dto/create-assign-book.dto';
import { UpdateAssignBookDto } from './dto/update-assign-book.dto';

@Controller('assign-book')
export class AssignBookController {
  constructor(private readonly assignBookService: AssignBookService) {}

  @Post()
  create(@Body() createAssignBookDto: CreateAssignBookDto) {
    return this.assignBookService.create(createAssignBookDto);
  }

  @Get()
  findAll() {
    return this.assignBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignBookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignBookDto: UpdateAssignBookDto) {
    return this.assignBookService.update(+id, updateAssignBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignBookService.remove(+id);
  }
}
