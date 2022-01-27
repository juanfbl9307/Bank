import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankStatus } from '../database/entities/bank_status.entity';

@Injectable()
export class BankStatusRep {
  constructor(
    @InjectRepository(BankStatus) private bankModel: Repository<BankStatus>,
  ) {}
  async getBankStatues(): Promise<BankStatus[]> {
    return await this.bankModel.find();
  }
  async createBankStatus(params): Promise<BankStatus[]> {
    const bankStatuses = this.bankModel.create(params);
    return await this.bankModel.save(bankStatuses);
  }
}
