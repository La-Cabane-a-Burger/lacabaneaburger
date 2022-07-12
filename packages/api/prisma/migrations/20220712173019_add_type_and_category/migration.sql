/*
  Warnings:

  - You are about to drop the column `category` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `type` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `type` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('BURGER', 'SALAD', 'NUGGETS', 'APPETIZER', 'DESSERT', 'SIDE', 'BEVERAGE', 'KID');

-- CreateEnum
CREATE TYPE "ItemCategory" AS ENUM ('BURGER', 'SALAD', 'NUGGETS', 'APPETIZER', 'DESSERT', 'SIDE', 'BEVERAGE', 'KID');

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "type" "ItemType" NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "ItemCategory" NOT NULL;

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "category",
ADD COLUMN     "type" "ItemType" NOT NULL;

-- DropEnum
DROP TYPE "Category";
