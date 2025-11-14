import { useRouteLoaderData } from "react-router";
import { useCart } from "../context/CartContext";
import "../styles/Shop.css";

export default function Shop() {
  const data = useRouteLoaderData("root-layout");
  const { addToCart } = useCart();

  return (
    <>
      <h1>Shop page</h1>
      <section className="products">
        products!
        {data.length ? (
          data.map((product) => (
            <div key={product.id} className="product-card">
              <figure>
                <img src={product.image} alt={`image of ${product.image}`} />
              </figure>
              <div>
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
                <button onClick={() => addToCart(product)}>Add to Cart!</button>
              </div>
            </div>
          ))
        ) : (
          <h1>loading...</h1>
        )}
      </section>
    </>
  );
}
