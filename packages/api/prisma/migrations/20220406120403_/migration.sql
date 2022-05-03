-- AlterIndex
ALTER INDEX "Ingredient_name_key" RENAME TO "Ingredient.name_unique";

-- AlterIndex
ALTER INDEX "Item_name_key" RENAME TO "Item.name_unique";

-- AlterIndex
ALTER INDEX "Menu_name_key" RENAME TO "Menu.name_unique";

-- AlterIndex
ALTER INDEX "Store_slug_key" RENAME TO "Store.slug_unique";

-- AlterIndex
ALTER INDEX "User_email_key" RENAME TO "User.email_unique";
