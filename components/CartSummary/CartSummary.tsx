import React from "react";
import "./CartSummary.css";

interface Props {
  totalAmount: number;
}

export default function CartSummary({ totalAmount }: Props) {
  const subtotal = totalAmount.toFixed(2);

  return (
    <section className="cartSummaryContainer">
      <span>
        <strong>Sub total: </strong> $ {subtotal}
      </span>
      <button>Check out</button>
    </section>
  );
}
