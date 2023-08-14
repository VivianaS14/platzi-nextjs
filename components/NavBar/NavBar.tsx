"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { useCart } from "@store/Cart";

export default function NavBar() {
  const pathName = usePathname();
  const { count: cartCount } = useCart();

  const showCartCount = () => {
    if (!cartCount) {
      return "(0)";
    }
    if (cartCount > 9) {
      return (
        <span>
          9 <sup>+</sup>
        </span>
      );
    }
    return `(${cartCount})`;
  };

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
              <ShoppingCartIcon />
            </div>
            <p>Canasta {showCartCount()}</p>
          </Link>
        </nav>
      </menu>
    </header>
  );
}
