import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  neighborhood: string;
  @IsString()
  @IsNotEmpty()
  address_line1: string;
  @IsString()
  @IsOptional()
  address_line2: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  postal_code: string;
  @IsNumber()
  countryId: number;
  @IsString()
  @IsNotEmpty()
  telephone: string;
  @IsString()
  @IsNotEmpty()
  mobile: string;
}
