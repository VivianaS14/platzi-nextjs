import React, { useState } from "react";
import { TProduct } from "index";
import { useCartMutations } from "@store/Cart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface Props {
  product: TProduct;
}

const validate = (quantity: number) => {
  let error = "";
  if (quantity < 1) error = "Can't be blank";
  return error;
};

const AddToCart = ({ product }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);
  const { addToCart } = useCartMutations();

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  };

  const handleSubmit = () => {
    const error = validate(quantity);
    setError(error);

    if (!error) {
      setLoading(true);
      setTimeout(() => {
        addToCart(product, quantity);
        setLoading(false);
        setVisible(true);
        toggleMessage();
      }, 1500);
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(target.value, 10));
  };

  return (
    <div className="addToCartContainer">
      <div className="inputContainer">
        <input
          type="number"
          placeholder="Cantidad"
          min={1}
          step={1}
          value={quantity}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          <AddShoppingCartIcon />
          {loading ? "..." : "Agregar"}
        </button>
      </div>
      {error && (
        <div style={{ color: "red", position: "absolute" }}>{error}</div>
      )}
      {visible && (
        <div
          style={{
            color: "green",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <CheckCircleOutlineIcon />
          Agregado al carrito!
        </div>
      )}
    </div>
  );
};

export default AddToCart;
