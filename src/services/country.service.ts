import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '../database/entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country) private countryRepository: Repository<Country>,
  ) {}
  async getCountries(): Promise<Country[]> {
    return await this.countryRepository.find();
  }
  async createCountry(params): Promise<Country[]> {
    const bankStatuses = this.countryRepository.create(params);
    return await this.countryRepository.save(bankStatuses);
  }
}
