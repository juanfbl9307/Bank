import { Module } from '@nestjs/common';
import { BanksController } from './banks.controller';
import { BankService } from './services/bank.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BanksRepository } from './repositories/bank.respository';
import { BankStatusService } from './services/bank_status.service';
import { BankStatusRep } from './repositories/bank_status.repository';

import { AddressService } from './services/address.service';
import { CountryService } from './services/country.service';
import { Transaction } from './database/entities/transaction.entity';
import { Bank } from './database/entities/bank.entity';
import { BankStatus } from './database/entities/bank_status.entity';
import { Address } from './database/entities/address.entity';
import { Country } from './database/entities/country.entity';
import { TransactionStatus } from './database/entities/transaction_status.entity';
import { BankBalance } from './database/entities/bank_balance.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      Bank,
      Transaction,
      BankStatus,
      Address,
      Country,
      TransactionStatus,
      BankBalance,
    ]),
  ],
  controllers: [BanksController],
  providers: [
    BankService,
    BanksRepository,
    BankStatusService,
    BankStatusRep,
    AddressService,
    CountryService,
  ],
})
export class BanksModule {}
