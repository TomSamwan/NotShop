export async function productsLoader() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("no data fetched!");
  }
  const products = await response.json();
  !localStorage.products &&
    localStorage.setItem("products", JSON.stringify(products));
  return products;
}
