import { createContext, useState, useContext } from "react";
import { saveCart } from "../utils/api";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  localStorage.setItem("cartItems", JSON.stringify(cart));

  const addToCart = (item) => {
    const existingItem = cart.find((product) => product._id === item._id);

    setCart((prevCart) =>
      existingItem
        ? prevCart.map((product) => {
            return product._id === item._id
              ? { ...product, quantity: product.quantity + 1 }
              : product;
          })
        : [...prevCart, { ...item, quantity: 1 }]
    );
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product._id !== id);
    setCart(updatedCart);
  };

  const modifyQty = (e, id) => {
    const currentProduct = cart.find((cartItem) => id === cartItem._id);

    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id == currentProduct._id
          ? {
              ...item,
              quantity: e.target.value > 0 ? parseInt(e.target.value) : 1,
            }
          : item
      )
    );
  };

  const handleIncrement = (increment, product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id == product._id
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
  };

  const calcCartQty = () =>
    cart.length > 0 &&
    cart.map((p) => Number(p.quantity)).reduce((acc, curr) => acc + curr);

  const calcCartTotal = () =>
    cart.length > 0 &&
    cart
      .map((p) => p.price * p.quantity)
      .reduce((acc, curr) => acc + curr)
      .toFixed(2);

  const saveCartToDB = () => {
    saveCart(cart);
  };


  const value = {
    cart,
    addToCart,
    removeFromCart,
    modifyQty,
    handleIncrement,
    calcCartQty,
    calcCartTotal,
    saveCartToDB,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("No cart content found");
  }
  return context;
}
