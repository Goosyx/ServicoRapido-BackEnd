-- AlterTable
ALTER TABLE "address" ALTER COLUMN "number" DROP NOT NULL,
ALTER COLUMN "number" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "complement" DROP NOT NULL;
