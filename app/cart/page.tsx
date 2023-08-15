"use client";

import CartItemList from "@components/CartItemList/CartItemList";
import { useCart, useCartMutations } from "@store/Cart";
import "./cart.css";
import CartSummary from "@components/CartSummary/CartSummary";

export default function Page() {
  const { items, subtotal } = useCart();
  const { removeFromCart } = useCartMutations();

  return (
    <main className="cartContainer">
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <div className="divider"></div>
      <CartSummary totalAmount={subtotal} />
    </main>
  );
}
