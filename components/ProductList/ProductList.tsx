"use client";

import React from "react";
import { TProduct } from "index";
import { useEffect } from "react";
import "./ProductList.css";
import Link from "next/link";
import Card from "@components/Card/Card";

interface Props {
  products: TProduct[];
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ id, name, image, price }) => (
    <Link key={id} href={`/product/${id}`}>
      <Card image={image as string} name={name} price={price} />
    </Link>
  ));

function ProductList({ products }: Props) {
  return (
    <div className="productsContainer">{mapProductsToCards(products)}</div>
  );
}

export default ProductList;
