import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity('coffee') // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // @Column('json', { nullable: true })
  @JoinTable() // specified table
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true }) // insert
  flavors: Flavor[];
}
