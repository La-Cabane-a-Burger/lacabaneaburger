/*
  Warnings:

  - The values [LAC] on the enum `Allergen` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Allergen_new" AS ENUM ('GLUTEN', 'PEANUTS', 'SOY', 'SHELLFISH', 'EGGS', 'MILK', 'NUTS', 'SESAME', 'WHEAT', 'CORN', 'SULFUR', 'LUPIN', 'MUSHROOMS', 'CELERY', 'MUSTARD', 'MOLLUSCS', 'TURKEY', 'PORK', 'CHICKEN', 'FISH');
ALTER TABLE "Ingredient" ALTER COLUMN "allergens" TYPE "Allergen_new"[] USING ("allergens"::text::"Allergen_new"[]);
ALTER TYPE "Allergen" RENAME TO "Allergen_old";
ALTER TYPE "Allergen_new" RENAME TO "Allergen";
DROP TYPE "Allergen_old";
COMMIT;
