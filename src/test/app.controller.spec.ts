import { Test, TestingModule } from '@nestjs/testing';
import { BanksController } from '../banks.controller';
import { BankService } from '../services/bank.service';

describe('AppController', () => {
  let appController: BanksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BanksController],
      providers: [BankService],
    }).compile();

    appController = app.get<BanksController>(BanksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
