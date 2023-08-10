"use client";

import { TProduct } from "index";
import Link from "next/link";
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

  return (
    <div>
      {product && (
        <>
          <h3>{product.name}</h3>
          <p>{product.attributes.description}</p>
          <img src={product.image as string} alt={product.name} />
        </>
      )}
      <hr />

      <button>
        <Link href="/">Go Back</Link>
      </button>
    </div>
  );
}
