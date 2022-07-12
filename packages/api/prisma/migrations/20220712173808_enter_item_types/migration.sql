/*
  Warnings:

  - The values [BURGER,SALAD,NUGGETS,APPETIZER,DESSERT,SIDE,BEVERAGE] on the enum `ItemCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ItemCategory_new" AS ENUM ('UNMISSABLE', 'LEGENDARY', 'CREATIVE', 'VEGGIE', 'KID');
ALTER TABLE "Item" ALTER COLUMN "category" TYPE "ItemCategory_new" USING ("category"::text::"ItemCategory_new");
ALTER TYPE "ItemCategory" RENAME TO "ItemCategory_old";
ALTER TYPE "ItemCategory_new" RENAME TO "ItemCategory";
DROP TYPE "ItemCategory_old";
COMMIT;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "category" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "type" DROP NOT NULL;
