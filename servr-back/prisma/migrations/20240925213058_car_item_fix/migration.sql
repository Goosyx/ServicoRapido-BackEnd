-- DropForeignKey
ALTER TABLE "cartItem" DROP CONSTRAINT "cartItem_cartId_fkey";

-- DropForeignKey
ALTER TABLE "cartItem" DROP CONSTRAINT "cartItem_productId_fkey";

-- AlterTable
ALTER TABLE "cartItem" ALTER COLUMN "cartId" DROP NOT NULL,
ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartItem" ADD CONSTRAINT "cartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
