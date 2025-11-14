// import { createContext, useState, useContext } from "react";

// const CartContext = createContext(null);

// export function ShopProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   function addToCart(item) {
//     setCart((prevItems) => {
//       const existingItem = prevItems.find((product) => product.id !== item.id);

//       existingItem
//         ? prevItems.map((i) => {
//             i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i;
//           })
//         : [...prevItems, { ...item, quantity: 1 }];
//     });
//   }

//   function removeFromCart(id) {
//     const updatedCart = cart.filter((product) => product.id !== id);
//     setCart(updatedCart);
//   }

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export function useCart() {
//   const context = useContext(CartContext);
//   if(context === undefined) {
//     throw new Error('this is not good :(')
//   } 
//   return context
// }
