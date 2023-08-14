"use client";

// Pagina estática porque no depende de un contenido externo
// Este siempre sera el index de la app
import { useEffect, useState } from "react";
import Link from "next/link";
import { TProduct } from "index";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";

export default function Page() {
  const [productsList, setProductsList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("api/fluffs")
      .then((response) => response.json())
      .then(({ data }) => setProductsList(data));
  }, []);

  return (
    <main>
      <KawaiiHeader />

      <ul className="list-container">
        {productsList.map((fluff) => (
          <li key={fluff.id}>
            <h4>{fluff.name}</h4>
            <div>
              <img
                src={fluff.image as string}
                alt={`Fluff - ${fluff.name}`}
                width={100}
              />
            </div>
            <Link href={`/product/${fluff.id}`}>{fluff.sku}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
