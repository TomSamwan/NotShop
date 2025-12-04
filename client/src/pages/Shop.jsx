import { useRouteLoaderData } from "react-router";
import { useCart } from "../context/CartContext";
import "../styles/Shop.css";

export default function Shop() {
  const data = useRouteLoaderData("root-layout");
  const { addToCart } = useCart();

  return (
    <>
      <section className="flex-1 align-center px-4 py-6 sm:px-6">
        <div className="flex h-full flex-col bg-white shadow-xl">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-gray-900">Shop Page</h2>
          </div>
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {data.length > 0 ? (
                  data.map((product) => (
                    <li key={product._id} className="flex py-6">
                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          className="size-full object-cover"
                          src={product.image}
                          alt={`image of ${product.image}`}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col justify-between text-base font-medium text-gray-900">
                        <div>
                          <h3>
                            <a href="/Product/" data-discover="true">
                              {product.title}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.rating.rate}/5 ({product.rating.count}{" "}
                            reviews)
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p>£{product.price}</p>
                          <div className="font-medium text-indigo-600 hover:text-indigo-500">
                            <button onClick={() => addToCart(product)}>
                              Add to Cart!
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <h1>loading...</h1>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
