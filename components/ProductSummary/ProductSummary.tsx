import React from "react";
import ProductAttributes from "./ProductAttributes";
import { TProduct } from "index";
import "./ProductSummary.css";

interface Props {
  product: TProduct;
}

export default function ProductSummary({ product }: Props) {
  const { image, name, attributes, id, price, sku } = product;

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
          </div>
        </div>
      </section>
      <ProductAttributes attributes={attributes} />
    </>
  );
}
