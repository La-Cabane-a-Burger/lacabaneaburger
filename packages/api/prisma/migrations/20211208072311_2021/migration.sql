/*
  Warnings:

  - You are about to drop the `MenuItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderMenus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderRecipes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Allergen" AS ENUM ('GLUTEN', 'PEANUTS', 'SOY', 'SHELLFISH', 'EGGS', 'MILK', 'NUTS', 'SESAME', 'WHEAT', 'CORN', 'SULFUR', 'LUPIN', 'MUSHROOMS', 'CELERY', 'MUSTARD', 'LAC', 'TURKEY', 'PORK', 'CHICKEN', 'FISH');

-- DropForeignKey
ALTER TABLE "MenuItems" DROP CONSTRAINT "MenuItems_itemId_fkey";

-- DropForeignKey
ALTER TABLE "MenuItems" DROP CONSTRAINT "MenuItems_menuId_fkey";

-- DropForeignKey
ALTER TABLE "OrderMenus" DROP CONSTRAINT "OrderMenus_menuId_fkey";

-- DropForeignKey
ALTER TABLE "OrderMenus" DROP CONSTRAINT "OrderMenus_orderItemId_fkey";

-- DropForeignKey
ALTER TABLE "OrderRecipes" DROP CONSTRAINT "OrderRecipes_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "OrderRecipes" DROP CONSTRAINT "OrderRecipes_orderItemId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "allergens" "Allergen"[],
ALTER COLUMN "price" SET DEFAULT 0.0;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "itemId" TEXT,
ADD COLUMN     "menuId" TEXT;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "menuId" TEXT;

-- DropTable
DROP TABLE "MenuItems";

-- DropTable
DROP TABLE "OrderMenus";

-- DropTable
DROP TABLE "OrderRecipes";

-- CreateTable
CREATE TABLE "OrderRecipe" (
    "orderItemId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "OrderRecipe_pkey" PRIMARY KEY ("orderItemId","ingredientId")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "menuId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "pickable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("menuId","itemId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_name_key" ON "Menu"("name");

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderRecipe" ADD CONSTRAINT "OrderRecipe_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderRecipe" ADD CONSTRAINT "OrderRecipe_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
