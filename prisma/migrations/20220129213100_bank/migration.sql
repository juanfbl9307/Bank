-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "code" INTEGER NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "continent_name" TEXT NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "address_line1" TEXT NOT NULL,
    "address_line2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    "telephone" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusId" INTEGER NOT NULL,
    "amount_added" MONEY NOT NULL,
    "amount_subtracted" MONEY NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "status_code_key" ON "status"("code");

-- CreateIndex
CREATE UNIQUE INDEX "country_name_key" ON "country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "address_address_line1_key" ON "address"("address_line1");

-- CreateIndex
CREATE UNIQUE INDEX "address_address_line2_key" ON "address"("address_line2");

-- CreateIndex
CREATE UNIQUE INDEX "address_telephone_key" ON "address"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "address_mobile_key" ON "address"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "bank_name_key" ON "bank"("name");

-- CreateIndex
CREATE UNIQUE INDEX "bank_addressId_key" ON "bank"("addressId");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank" ADD CONSTRAINT "bank_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank" ADD CONSTRAINT "bank_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
