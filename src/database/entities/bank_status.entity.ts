import {Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn} from 'typeorm';
import { Bank } from './bank.entity';
import {JoinColumn} from "typeorm";

@Entity()
export class BankStatus {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  status: string;
  @PrimaryColumn()
  code: number;

  @OneToMany(() => Bank, bank => bank.status,{ cascade: true, eager: true })
  @JoinColumn()
  banks: Bank[];
}
