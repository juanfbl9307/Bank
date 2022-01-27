import { NestFactory } from '@nestjs/core';
import { BanksModule } from './banks.module';

async function bootstrap() {
  const app = await NestFactory.create(BanksModule);
  await app.listen(3000);
}
bootstrap();

//docker run --name some-postgres -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -p 5432:5432 -d postgres
