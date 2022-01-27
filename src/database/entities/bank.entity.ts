import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { BankStatus } from './bank_status.entity';
import { Address } from './address.entity';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'int' })
  status_code: number;
  @Column({ type: 'int8' })
  address_id: number;

  @ManyToOne(() => BankStatus, bankStatus => bankStatus.banks)
  status: BankStatus;

  @ManyToOne(() => Address, (address) => address.id)
  address: Address;
}
