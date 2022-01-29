import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bank } from './bank.entity';

@Entity()
export class BankBalance {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  user_id: number;
  @Column()
  balance: number;
  @Column()
  bank_id: number;
  @ManyToMany(() => Bank)
  banks: Bank[];
}
