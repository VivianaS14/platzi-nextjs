"use client";
import React from "react";
import { CartItemType } from "@store/Cart";
import { TProduct } from "index";
import ClearIcon from "@mui/icons-material/Clear";
import "./CartItemList.css";
import Link from "next/link";

interface Props {
  items: CartItemType[];
  removeFromCart: (product: TProduct) => void;
}

function CartItemList({ items, removeFromCart }: Props) {
  if (items.length === 0)
    return (
      <section className="warningMessage">
        <h3>El carrito esta vació</h3>
        <p>
          Necesitas agregar algunos items al carrito antes de poder hacer la
          compra.
        </p>
      </section>
    );

  return (
    <section className="itemsContainer">
      {items.map((item) => (
        <div className="item">
          <div className="itemImage">
            <img src={item.image as string} alt="Product Image" width={130} />
          </div>
          <div className="itemInfo">
            <Link href={`/product/${item.id}`}>{item.name}</Link>
            <p>
              {" "}
              {item.quantity} X $ {item.price}
            </p>
            <p>SKU: {item.sku}</p>
            <div className="btnContainer">
              <button onClick={() => removeFromCart(item)}>
                <ClearIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CartItemList;
