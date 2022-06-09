-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "conversionRates" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "shopSlug" TEXT NOT NULL,
    "inStock" BOOLEAN NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shop_name_key" ON "Shop"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Shop_slug_key" ON "Shop"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Shop_image_key" ON "Shop"("image");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shopSlug_fkey" FOREIGN KEY ("shopSlug") REFERENCES "Shop"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
