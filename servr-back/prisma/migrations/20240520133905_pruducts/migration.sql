/*
  Warnings:

  - The `size` column on the `product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `materials` column on the `product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "size",
ADD COLUMN     "size" VARCHAR(255)[],
DROP COLUMN "materials",
ADD COLUMN     "materials" VARCHAR(255)[];
