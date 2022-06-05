import prisma from '../lib/prisma.js' // lets us use prisma client

// create global function to receive all shops from the database
export async function getShops() {

  const shops = await prisma.shop.findMany({
    include: {
      products: true,
    },
    orderBy: { name: 'asc' }
  })

  return shops.map((shop) => {
    return {
      id: shop.id,
      image: shop.image,
      slug: shop.slug,
      owner: shop.owner,
      name: shop.name,
      description: shop.description,
    }
  })
}

export async function getProducts( ) {
  const products = await prisma.product.findMany({
    include: {
      shop: true
    },
    orderBy: { item : 'asc'},
  })

  // console.log(products)

  return products.map((product) => {
    return {
      id: product.id,
      name: product.item,
      image: product.image,
      price: product.price,
      shopName: product.shop.name,
      shopSlug: product.shopSlug,
    }
  })
}

export async function getShopProducts(params){
  const shop = await prisma.shop.findFirst({
    where: {slug: params.slug}
  })

  const products = await prisma.product.findMany({
    where: { shopSlug: params.slug},
    orderBy: { item: 'asc' }
  })

  if(!shop || !products){
    return { status: 404 }
  }

  const shopProducts = products.map((product) => {
    return {
      id: product.id,
      image: product.image,
      name: product.item,
      price: product.price,
    }
  })

  return { shop, products: shopProducts}
}