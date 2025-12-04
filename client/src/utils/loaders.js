export async function productsLoader() {
  const response = await fetch("http://localhost:8080/api/products/all");
  if (!response.ok) {
    throw new Error("no data fetched!");
  }
  const products = await response.json();
  return products;
}