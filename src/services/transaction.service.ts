import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '../database/entities/transaction.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from '../dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}
  async getTransactions() {
    return await this.transactionRepository.find();
  }
  async createTransaction(params: CreateTransactionDto) {
    let add = 0;
    let subtract = 0;
    switch (params.operationType) {
      case 'add': {
        add = params.amount;
        break;
      }
      case 'subtract': {
        subtract = params.amount;
        break;
      }
      default: throw new Error('Operation type is invalid')
    }

    const transactionParams = {
      userId: params.userId,
      amount_subtracted: subtract,
      amount_added: add,
      bankId: params.bankId,
      statusId: params.statusId,
    };
    const transaction = this.transactionRepository.create(transactionParams);
    return await this.transactionRepository.save(transaction);
  }

  async getBalance(userId: number) {
    const transactions = await this.transactionRepository.find({
      where: { userId: userId },
    });
    const balance = transactions.reduce(
      (acc, current) => acc - current.amount_subtracted + current.amount_added,
      0,
    );
    return {
      userId: userId,
      balance: balance,
    };
  }
}
