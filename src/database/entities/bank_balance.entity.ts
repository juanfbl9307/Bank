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
  @Column({ type: 'int' })
  user_id: number;
  @Column({ type: 'int' })
  balance: number;
  @Column({ type: 'int' })
  bank_id: number;
  @ManyToMany(() => Bank)
  @JoinTable()
  banks: Bank[];
}
