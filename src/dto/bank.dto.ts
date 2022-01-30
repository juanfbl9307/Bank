import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBankDto {
  @IsString()
  @IsNotEmpty()
  name;
  @IsNumber()
  statusId;
  @IsNumber()
  addressId;
}
