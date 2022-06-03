import prisma from '../lib/prisma.js' // lets us use prisma client

// create global function to receive all shops from the database
export async function getShops() {

  const shops = await prisma.shop.findMany({
    include: {
      products: true,
    }
  })

  return shops.map((shop) => {
    return {
      id: shop.id,
      slug: shop.slug,
      owner: shop.owner,
      name: shop.name,
      description: shop.description,
    }
  })
}

export async function getProducts( params ) {
  const products = await prisma.product.findMany({
    where: { shopSlug: params.slug }
  })
  console.log(params)

  // console.log(products)

  return products.map((product) => {
    return {
      id: product.id,
      name: product.item,
      price: product.price
    }
  })
}