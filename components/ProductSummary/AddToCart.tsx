import React from "react";
import { TProduct } from "index";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface Props {
  product: TProduct;
}

const AddToCart = ({ product }: Props) => {
  return (
    <div className="addToCartContainer">
      <div className="inputContainer">
        <input
          type="number"
          placeholder="Cantidad"
          min={1}
          step={1}
          value={1}
        />
        <button>
          <AddShoppingCartIcon />
          Agregar
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
