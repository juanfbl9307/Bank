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
  @Column({ type: 'varchar' })
  neighborhood: string;
  @Column({ type: 'varchar' })
  address_line1: string;
  @Column({ type: 'varchar' })
  address_line2: string;
  @Column({ type: 'varchar' })
  city: string;
  @Column({ type: 'bigint' })
  postal_code: number;
  @Column({ type: 'int8' })
  country_id: number;
  @Column({ type: 'bigint' })
  telephone: number;
  @Column({ type: 'bigint' })
  mobile: number;
  @ManyToOne(() => Country, (country) => country.id)
  country: Country;
}
