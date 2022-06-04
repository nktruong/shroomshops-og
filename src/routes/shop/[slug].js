import { getShopProducts } from "../../utils/prisma";

export async function get({params}) {
  const { shop, products } = await getShopProducts(params)

  return {
    headers: { 'Content-Type': 'application/json'},
    status: 200,
    body: { shop, products },
  }
}