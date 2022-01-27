import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionStatus } from './transaction_status.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'int' })
  user_id: number;
  @Column({ type: 'decimal' })
  amount_subtracted: number;
  @Column({ type: 'decimal' })
  amount_added: number;
  @Column({ type: 'int' })
  bank_id: number;
  @Column({ type: 'time' })
  date: string;
  @Column({ type: 'int' })
  status_code: number;
  @ManyToOne(() => TransactionStatus, (transaction) => transaction.code)
  transaction_status: TransactionStatus;
}
