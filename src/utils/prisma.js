import prisma from '../lib/prisma.js' // lets us use prisma client

// create global function to receive all shops from the database

export async function getShops() {
  const shops = await prisma.shop.findMany({
    include: { owner: true }, // must have a shop owner
    orderBy: { name: 'desc'}, // latest shops added show up first
  })

  return shops.map((shop) => {
    return {
      id: shop.id,
      owner: shop.owner.altname,
      ownerNameColor: shop.owner.color,
      name: shop.name,
      description: shop.description,
      products: shop.products
    }
  })
}