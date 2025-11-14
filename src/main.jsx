import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { productsLoader } from "./utils/loaders.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: productsLoader,
    id: "root-layout",
    children: [
      { index: true, element: <Home /> },
      { path: "Shop", element: <Shop /> },
      { path: "Cart", element: <Cart /> },
      { path: "Login", element: <Login /> },
      { path: "Product/:id", element: <Product /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
