import { createContext, useState, useContext } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  localStorage.setItem("cartItems", JSON.stringify(cart));

  function addToCart(item) {
    setCart((prevItems) => {
      const existingItem = prevItems.find((product) => product.id === item.id);

      if (existingItem) {
        return prevItems.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        });
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function modifyQty(e, id) {
    const currentProduct = cart.find((cartItem) => id === cartItem.id);

    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id == currentProduct.id
          ? { ...item, quantity: e.target.value > 0 ? parseInt(e.target.value) : 1 }
          : item
      )
    );
  }

  function handleIncrement(increment, product) {
    // const increment = e.target.attributes.increment.value;

    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id == product.id
          ? {
              ...item,
              quantity:
                increment === "+"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  }

  const calcCartQty = () =>
    cart.length > 0 &&
    cart.map((p) => Number(p.quantity)).reduce((acc, curr) => acc + curr);

  const calcCartTotal = () =>
    cart.length > 0 &&
    cart
      .map((p) => p.price * p.quantity)
      .reduce((acc, curr) => acc + curr)
      .toFixed(2);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    modifyQty,
    handleIncrement,
    calcCartQty,
    calcCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("this is not good :(");
  }
  return context;
}
