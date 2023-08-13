"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function NavBar() {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, []);

  return (
    <header>
      <menu>
        <nav className="menuContainer">
          <Link
            href="/"
            className={
              pathName === "/" ? "menuItem menuItemActive" : "menuItem"
            }
            title="Inicio | Todos los productos"
          >
            <div>
              <img src={"/images/Fluff.png"} alt="Fluff-Logo" width={70} />
            </div>
            <p>Fluff Store</p>
          </Link>
          <Link
            href="/cart"
            className={
              pathName === "/cart" ? "menuItem menuItemActive" : "menuItem"
            }
          >
            <div>
              <img src={"/images/carro.png"} alt="Cart Logo" width={50} />
            </div>
            <p>Canasta</p>
          </Link>
        </nav>
      </menu>
    </header>
  );
}
