import prisma from '../lib/prisma.js' // lets us use prisma client

// create global function to receive all shops from the database
export async function getShops() {

  const shops = await prisma.shop.findMany({
    include: {
      products: true,
    }
  })

  return shops.map((shop) => {

    console.log(JSON.stringify(shop.products[0].item))

    return {
      id: shop.id,
      owner: shop.owner,
      name: shop.name,
      description: shop.description,
      productName: shop.products[0].item,
      productPrice: shop.products[0].price,
    }
  })
}

export async function getProducts() {
  const products = await prisma.product.findMany({})

  return products.map((product) => {
    return {
      id: product.id,
      name: product.item,
      price: product.price
    }
  })
}