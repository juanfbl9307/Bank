import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { BankService } from './services/bank.service';
import { StatusService } from './services/status.service';
import { AddressService } from './services/address.service';
import { CountryService } from './services/country.service';
import { CreateBankDto } from './dto/bank.dto';
import { CreateAddressDto } from './dto/address.dto';
import { CreateCountryDto } from './dto/country.dto';
import { CreateStatusDto } from './dto/status.dto';
import { TransactionService } from './services/transaction.service';
import { CreateTransactionDto } from './dto/transaction.dto';

@Controller()
export class BanksController {
  constructor(
    private readonly bankService: BankService,
    private readonly statusService: StatusService,
    private readonly addressService: AddressService,
    private readonly countryService: CountryService,
    private readonly transactionService: TransactionService,
  ) {}

  @Get()
  getBanks() {
    return this.bankService.getBanks();
  }

  @Get('statuses')
  getStatus() {
    return this.statusService.getStatuses();
  }

  @Get('address')
  getAddresses() {
    return this.addressService.getAddresses();
  }
  @Get('country')
  getCountries() {
    return this.countryService.getCountries();
  }

  @Get('transaction')
  getTransactions() {
    return this.transactionService.getListAll();
  }

  @Get('balance/user')
  getBalance(@Query('id', ParseIntPipe) id: number) {
    return this.transactionService.getBalance(id);
  }

  @Post('transaction')
  createTransaction(@Body() params: CreateTransactionDto) {
    return this.transactionService.createTransaction({ ...params });
  }

  @Post()
  createBank(@Body() params: CreateBankDto) {
    return this.bankService.createBank({ ...params });
  }

  @Post('status')
  createStatus(@Body() params: CreateStatusDto) {
    return this.statusService.createStatus({ ...params });
  }

  @Post('address')
  createAddress(@Body() params: CreateAddressDto) {
    return this.addressService.createAddress({ ...params });
  }

  @Post('country')
  createCountry(@Body() params: CreateCountryDto) {
    return this.countryService.createCountry({ ...params });
  }

  @Post('transfer')
  transferFound(@Body() params) {
    return this.transactionService.transferFounds(
      params.sender,
      params.receptor,
      params.amount,
    );
  }
}
