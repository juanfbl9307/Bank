import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from '../database/entities/bank.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BanksRepository {
  constructor(@InjectRepository(Bank) private bankModel: Repository<Bank>) {}
  async getBanks(): Promise<Bank[]> {
    return await this.bankModel.find({relations:['status','address']});
  }
  async createBank(params): Promise<Bank[]> {
    const bank = this.bankModel.create(params);
    return await this.bankModel.save(bank);
  }
}
