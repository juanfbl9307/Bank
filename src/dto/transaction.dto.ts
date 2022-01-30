import { IsIn, IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  userId: number;
  @IsNumber()
  @Min(0)
  amount: number;
  @IsString()
  @IsIn(['add', 'subtract'])
  operationType: string;
  @IsNumber()
  @IsPositive()
  bankId: number;
  @IsNumber()
  statusId: number;
}
