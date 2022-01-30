import { NestFactory } from '@nestjs/core';
import { BanksModule } from './banks.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BanksModule);
  app.useGlobalPipes(
    new ValidationPipe({ forbidNonWhitelisted: true, whitelist: true }),
  );
  await app.listen(3000);
}
bootstrap();
