import { Link, useLocation } from "react-router";
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const location = useLocation();
  const { cart, calcCartQty } = useCart();

  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b-2 border-gray-200">
        <div className="flex h-16 items-center justify-between">
          <div className="flex justify-between items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              id="toggleMenuButton"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 in-aria-expanded:hidden"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 not-in-aria-expanded:hidden"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex shrink-0 items-center sm:block">
            <h1 className="h-8 w-auto text-lg font-medium">Shop</h1>
          </div>

          <div className="hidden sm:ml-6 sm:block">
            <ul className="flex space-x-4">
              {location.pathname.includes("Shop") ? (
                <li>
                  <Link to="/">Home</Link>
                </li>
              ) : (
                <li>
                  <Link to="/Shop">Catalogue</Link>
                </li>
              )}
              <li>
                <Link to="/Login">Login/Register</Link>
              </li>
              <li>
                <Link to="/Cart">
                  Cart {cart.length ? parseInt(calcCartQty()) : ""}
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:hidden p-2 font-medium">
            <Link to="/Cart">
              Cart {cart.length ? parseInt(calcCartQty()) : ""}
            </Link>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        onBlur={() => setOpen(!open)}
        className={`${
          open == true ? "block" : "hidden"
        } absolute bg-white py-4 pr-2 border-r-1 border-b-1 border-gray-200 rounded-br-sm`}
      >
        <ul className="bg-white space-y-1 px-2 pt-2 pb-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Catalogue</Link>
          </li>
          <li>
            <Link to="/Login">Login/Register</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
