import { Module } from '@nestjs/common';
import { BanksController } from './banks.controller';
import { BankService } from './services/bank.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksRepository } from './repositories/banks.respository';
import { StatusService } from './services/status.service';
import { StatusesRepository } from './repositories/statuses.repository';
import { AddressService } from './services/address.service';
import { CountryService } from './services/country.service';
import { Transaction } from './database/entities/transaction.entity';
import { Bank } from './database/entities/bank.entity';
import { Status } from './database/entities/status.entity';
import { Address } from './database/entities/address.entity';
import { Country } from './database/entities/country.entity';
import { ConfigModule } from '@nestjs/config';
import { TransactionService } from './services/transaction.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    DatabaseModule,
    TypeOrmModule.forFeature([Bank, Transaction, Status, Address, Country]),
  ],
  controllers: [BanksController],
  providers: [
    BankService,
    BanksRepository,
    StatusService,
    StatusesRepository,
    AddressService,
    CountryService,
    TransactionService,
  ],
})
export class BanksModule {}
