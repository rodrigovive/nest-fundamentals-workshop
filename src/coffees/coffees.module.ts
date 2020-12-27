import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
// decorater that provides nest operation metadata
// organize operation structure
@Module({ controllers: [CoffeesController], providers: [CoffeesService] })
export class CoffeesModule {}
