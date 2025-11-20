export async function productsLoader() {
  const response = await fetch("https://not-shop-blush.vercel.app/products");
  if (!response.ok) {
    throw new Error("no data fetched!");
  }
  const products = await response.json();
  return products;
}
