/*
  Warnings:

  - You are about to drop the column `lontitude` on the `Store` table. All the data in the column will be lost.
  - Added the required column `longitude` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Store" DROP COLUMN "lontitude",
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL;
