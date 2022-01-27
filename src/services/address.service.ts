import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../database/entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) private addressRepository: Repository<Address>,
  ) {}
  async getAddresses(): Promise<Address[]> {
    return await this.addressRepository.find();
  }
  async createAddress(params): Promise<Address[]> {
    const address = this.addressRepository.create(params);
    return await this.addressRepository.save(address);
  }
}
