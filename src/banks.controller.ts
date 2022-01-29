import { Body, Controller, Get, Post } from '@nestjs/common';
import { BankService } from './services/bank.service';
import { StatusService } from './services/status.service';
import { AddressService } from './services/address.service';
import { CountryService } from './services/country.service';

@Controller()
export class BanksController {
  constructor(
    private readonly bankService: BankService,
    private readonly statusService: StatusService,
    private readonly addressService: AddressService,
    private readonly countryService: CountryService,
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

  @Post()
  createBank(@Body() params) {
    return this.bankService.createBank({ ...params });
  }

  @Post('statuses')
  createStatus(@Body() params) {
    return this.statusService.createStatus({ ...params });
  }

  @Post('address')
  createAddress(@Body() params) {
    return this.addressService.createAddress({ ...params });
  }

  @Post('country')
  createCountry(@Body() params) {
    return this.countryService.createCountry({ ...params });
  }
}
