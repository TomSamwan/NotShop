import { useLocation } from "react-router";

export default function Product() {
  const location = useLocation();
  const product = location.state;
  console.log(product);

  return (
    <>
      <h1>{product.title}</h1>
      <section>
        <div>
          <figure>
            <img src={product.image} alt={`picture of ${product.title}`} />
          </figure>
          <div>
            <p>{product.title}</p>
            <p style={{ fontSize: "12px" }}>{product.price}</p>
          </div>
        </div>
      </section>
    </>
  );
}
