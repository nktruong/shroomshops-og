import { getShops } from "../utils/prisma";

export async function get() {
  const shops = await getShops()

  // if no shops were obtained, return bad request
  if (!shops) {
    return { status: 400 }
  }

  return {
    headers: { 'Content-Type': 'application/json'},
    status: 200,
    body: { shops },
  }
}