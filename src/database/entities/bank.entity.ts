import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Status } from './status.entity';
import { Address } from './address.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  statusId: number;
  @Column()
  addressId: number;
  @ManyToOne(() => Status, (status) => status.banks)
  status: Status;
  @ManyToOne(() => Address, (address) => address.id)
  address: Address;
  @OneToMany(() => Transaction, (transaction) => transaction.bankId)
  transactions: Transaction[];
}
