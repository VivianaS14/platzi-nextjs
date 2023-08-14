import React from "react";
import ProductAttributes from "./ProductAttributes";
import { TProduct } from "index";
import "./ProductSummary.css";
import AddToCart from "./AddToCart";

interface Props {
  product: TProduct;
}

export default function ProductSummary({ product }: Props) {
  const { image, name, attributes, price, sku } = product;

  return (
    <>
      <section className="productContainer">
        <div className="overviewContainer">
          <div className="imgContainer">
            <img src={image as string} alt="Product Image" width={300} />
          </div>
          <div className="contentContainer">
            <h1>{name}</h1>
            <div className="description">
              <p>$ {price}</p>
              <p className="skuDescription">SKU: {sku}</p>
            </div>
            <AddToCart product={product} />
          </div>
        </div>
      </section>
      <ProductAttributes attributes={attributes} />
    </>
  );
}
