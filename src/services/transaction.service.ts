import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from '../database/entities/transaction.entity';
import { Connection, Repository } from 'typeorm';
import { CreateTransactionDto } from '../dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    private connection: Connection,
  ) {}
  async getListAll() {
    return await this.transactionRepository.find();
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

  async createTransaction(params: CreateTransactionDto) {
    const userBalance = await this.getBalance(params.userId);
    let add = 0;
    let subtract = 0;
    switch (params.operationType) {
      case 'add': {
        add = params.amount;
        break;
      }
      case 'subtract': {
        if (userBalance.balance < params.amount)
          throw new HttpException('Insufficient founds', 401);
        subtract = params.amount;
        break;
      }
      default:
        throw new Error('Operation type is invalid');
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

  async transferFounds(sender, receptor, amount) {
    const senderParams = {
      userId: sender.userId,
      operationType: 'subtract',
      amount: amount,
      bankId: sender.bankId,
      statusId: 1,
    };
    const receptorParams = {
      userId: receptor.userId,
      operationType: 'add',
      amount: amount,
      bankId: receptor.bankId,
      statusId: 1,
    };
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const sender = await this.createTransaction(senderParams);
      const receptor = await this.createTransaction(receptorParams);
      await queryRunner.commitTransaction();
      return {
        sender: sender,
        receptor: receptor,
      };
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
