/*
  Warnings:

  - You are about to alter the column `amount_added` on the `transaction` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(65,30)`.
  - You are about to alter the column `amount_subtracted` on the `transaction` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "amount_added" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "amount_subtracted" SET DATA TYPE DECIMAL(65,30);
