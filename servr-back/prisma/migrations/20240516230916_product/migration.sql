-- CreateTable
CREATE TABLE "product" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" REAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "quantity" REAL NOT NULL,
    "color" VARCHAR(255)[],
    "size" VARCHAR(255) NOT NULL,
    "materials" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "unit" VARCHAR(255) NOT NULL,
    "weight" REAL NOT NULL,
    "media" VARCHAR(255) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
