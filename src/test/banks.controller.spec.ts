import { Test } from '@nestjs/testing';
import { BanksController } from '../banks.controller';
import { CountryService } from '../services/country.service';
import { TransactionService } from '../services/transaction.service';
import { AddressService } from '../services/address.service';
import { StatusService } from '../services/status.service';
import { BankService } from '../services/bank.service';

jest.mock('../services/bank.service');
jest.mock('../services/status.service');
jest.mock('../services/address.service');
jest.mock('../services/transaction.service');
jest.mock('../services/country.service');

describe('CatsController', () => {
  let banksController: BanksController;
  let transactionService: TransactionService;
  let countryService: CountryService;
  let addressService: AddressService;
  let statusService: StatusService;
  let bankService: BankService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [BanksController],
      providers: [
        TransactionService,
        CountryService,
        AddressService,
        StatusService,
        BankService,
      ],
    }).compile();

    banksController = moduleRef.get<BanksController>(BanksController);
    countryService = moduleRef.get<CountryService>(CountryService);
    transactionService = moduleRef.get<TransactionService>(TransactionService);
    addressService = moduleRef.get<AddressService>(AddressService);
    statusService = moduleRef.get<StatusService>(StatusService);
    bankService = moduleRef.get<BankService>(BankService);
  });

  describe('getBanks', () => {
    it('should return an array of banks', async () => {
      const expected = 0;

      expect(expected).toEqual(0);
    });
  });
});
