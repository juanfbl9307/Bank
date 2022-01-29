import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Status } from './status.entity';
import { Address } from './address.entity';

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

  @ManyToOne(() => Status, (status) => status.id)
  status: Status;

  @ManyToOne(() => Address, (address) => address.id)
  address: Address;
}
