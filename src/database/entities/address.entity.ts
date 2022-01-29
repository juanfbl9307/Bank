import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from './country.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  neighborhood: string;
  @Column()
  address_line1: string;
  @Column()
  address_line2: string;
  @Column()
  city: string;
  @Column()
  postal_code: string;
  @Column()
  countryId: number;
  @Column()
  telephone: string;
  @Column()
  mobile: string;
  @ManyToOne(() => Country, (country) => country.id)
  country: Country;
}
