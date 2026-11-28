/*
  Warnings:

  - You are about to drop the column `createdBy` on the `PrimaryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `SecondaryOrder` table. All the data in the column will be lost.
  - Added the required column `salesmanId` to the `PrimaryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesmanId` to the `SecondaryOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Distributor" ADD COLUMN     "salesmanId" INTEGER;

-- AlterTable
ALTER TABLE "PrimaryOrder" DROP COLUMN "createdBy",
ADD COLUMN     "salesmanId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SecondaryOrder" DROP COLUMN "createdBy",
ADD COLUMN     "salesmanId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PrimaryOrder" ADD CONSTRAINT "PrimaryOrder_salesmanId_fkey" FOREIGN KEY ("salesmanId") REFERENCES "Salesman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecondaryOrder" ADD CONSTRAINT "SecondaryOrder_salesmanId_fkey" FOREIGN KEY ("salesmanId") REFERENCES "Salesman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
