-- AlterEnum
ALTER TYPE "Category" ADD VALUE 'KID';

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "capacity" DOUBLE PRECISION;
