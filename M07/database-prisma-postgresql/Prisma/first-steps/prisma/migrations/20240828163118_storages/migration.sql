-- CreateTable
CREATE TABLE "storages" (
    "id" SERIAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "storages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "storages_product_id_key" ON "storages"("product_id");

-- AddForeignKey
ALTER TABLE "storages" ADD CONSTRAINT "storages_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
