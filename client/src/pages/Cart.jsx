import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    modifyQty,
    handleIncrement,
    calcCartTotal,
    saveCartToDB,
  } = useCart();

  return (
    <>
      <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
        <div className="flex-1 align-center overflow-y-auto px-4 py-6 sm:px-6">
          {cart.length > 0 ? (
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Shopping cart
              </h2>
              <button
                onClick={() => saveCartToDB()}
                className="font-medium px-2 py-1  rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Save Cart
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <h2 className="text-lg font-medium text-gray-900">Cart Empty!</h2>
              <div className="mt-6 overflow-hidden">
                <Link to="/Shop">
                  <div className="inline-block text-indigo-600 font-[600] italic group">
                    Browse the catalogue
                    <div className="group mt-[-3px] h-[2.5px] w-0 group-hover:w-full bg-indigo-600 duration-50 transition-all ease-out"></div>
                  </div>
                </Link>
                <span> to find the things you want :)</span>
              </div>
            </div>
          )}
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.map((product, index) => (
                  <li key={`${product.title}${index}`} className="flex py-6">
                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        alt={product.description}
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link to={`/Product/${product.id}`} state={product}>
                              {product.title}
                            </Link>
                          </h3>
                          <div>
                            <p className="ml-4">{`£${(
                              product.price * product.quantity
                            ).toFixed(2)}`}</p>
                            <p className="ml-4 text-sm text-gray-500">{`(£${product.price.toFixed(
                              2
                            )})`}</p>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{`${product.rating.rate}/5 (${product.rating.count} reviews)`}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between">
                        <div className="flex items-center gap-4">
                          <p className="text-gray-500 text-sm">Quantity: </p>
                          <div className="grid grid-cols-[1fr_1fr_1fr] gap-1">
                            <button
                              className="text-white font-[600] bg-black hover:bg-indigo-900 rounded-md"
                              onClick={() => handleIncrement("-", product)}
                            >
                              -
                            </button>
                            <input
                              className="field-sizing-content px-1.5 rounded-md outline-2"
                              onChange={(e) => modifyQty(e, product.id)}
                              type="number"
                              value={product.quantity}
                            />
                            <button
                              className="text-white font-[600] bg-black hover:bg-indigo-900 rounded-md"
                              onClick={() => handleIncrement("+", product)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => removeFromCart(product._id)}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>£{calcCartTotal()}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <Link to="/Shop">
                <p className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
