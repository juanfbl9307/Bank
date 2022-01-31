import { Injectable } from '@nestjs/common';
import { Bank } from '../database/entities/bank.entity';
import { BanksRepository } from '../repositories/banks.respository';

@Injectable()
export class BankService {
  constructor(private readonly bankRepository: BanksRepository) {}
  async getBanks(): Promise<Bank[]> {
    return await this.bankRepository.getBanks();
  }
  async createBank(params): Promise<Bank[]> {
    return await this.bankRepository.createBank(params);
  }
}
