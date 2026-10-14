import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignBookDto } from './create-assign-book.dto';

export class UpdateAssignBookDto extends PartialType(CreateAssignBookDto) {}
