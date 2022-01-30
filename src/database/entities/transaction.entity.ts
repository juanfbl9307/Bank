import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bank } from './bank.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  userId: number;
  @Column({
    transformer: {
      to: (value: string) => parseInt(value),
      from: (value: string) => parseInt(value),
    },
  })
  amount_subtracted: number;
  @Column({
    transformer: {
      to: (value: string) => parseInt(value),
      from: (value: string) => parseInt(value),
    },
  })
  amount_added: number;
  @Column()
  bankId: number;
  @Column()
  createdAt: string;
  @Column()
  statusId: number;
  @ManyToOne(() => Bank, (bank) => bank.id)
  @JoinColumn({ name: 'bankId', referencedColumnName: 'id' })
  bank: Bank;
}
