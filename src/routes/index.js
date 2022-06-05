import { getShops, getProducts } from "../utils/prisma";

export async function get() {
  const shops = await getShops()
  const products = await getProducts()

  return {
    headers: { 'Content-Type': 'application/json'},
    status: 200,
    body: { shops, products },
  }
}