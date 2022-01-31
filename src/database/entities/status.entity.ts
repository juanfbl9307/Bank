import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Bank } from './bank.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class Status {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  description: string;
  @Column()
  code: number;
  @OneToMany(() => Bank, (bank) => bank.status)
  banks: Bank[];
  @OneToMany(() => Transaction, (transaction) => transaction.id)
  transactions: Transaction[];
}
