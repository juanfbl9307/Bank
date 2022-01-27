import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class TransactionStatus {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar' })
  status: string;
  @Column({ type: 'int' })
  code: number;
  @ManyToOne(() => Transaction, (transaction) => transaction.status_code)
  transactions: Transaction[];
}
