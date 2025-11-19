import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Layout() {
  const [num, setNum] = useState(0);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet context={{num, setNum}} />
      </main>
      <footer>Here is the footer!</footer>
    </>
  );
}
