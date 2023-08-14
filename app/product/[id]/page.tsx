"use client";

import ProductSummary from "@components/ProductSummary/ProductSummary";
import { TProduct } from "index";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const fluffId = params.id;
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`http://localhost:3000/api/fluffs/${fluffId}`)
      .then((res) => res.json())
      .then(({ data }) => setProduct(data));
  }, []);

  return <div>{product && <ProductSummary product={product} />}</div>;
}
