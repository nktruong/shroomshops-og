import { getProducts } from "../../utils/prisma";

export async function get() {
  const products = await getProducts()

  // if no shops were obtained, return bad request
  if (!products) {
    return { status: 400 }
  }

  return {
    headers: { 'Content-Type': 'application/json'},
    status: 200,
    body: { products },
  }
}