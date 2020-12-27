import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// no duplicate code
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
