import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  user_id: number;
  @Column()
  amount_subtracted: number;
  @Column()
  amount_added: number;
  @Column()
  bank_id: number;
  @Column()
  date: string;
  @Column()
  statusId: number;

}
