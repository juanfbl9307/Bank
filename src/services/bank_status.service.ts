import { Injectable } from '@nestjs/common';
import { BankStatusRep } from '../repositories/bank_status.repository';
import { BankStatus } from '../database/entities/bank_status.entity';

@Injectable()
export class BankStatusService {
  constructor(private readonly bankStatusRepository: BankStatusRep) {}
  async getBankStatues(): Promise<BankStatus[]> {
    return await this.bankStatusRepository.getBankStatues();
  }
  async createBankStatus(params): Promise<BankStatus[]> {
    return await this.bankStatusRepository.createBankStatus(params);
  }
}
