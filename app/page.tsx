"use client";

// Pagina estática porque no depende de un contenido externo
// Este siempre sera el index de la app
import { useEffect, useState } from "react";
import Link from "next/link";
import { TAPIFluffResponse, TProduct } from "index";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import ProductList from "@components/ProductList/ProductList";

// Esta función va a suceder dentro del servidor
async function getData() {
  const response = await fetch("https://fluff-store.vercel.app/api/fluffs");
  const { data: productsList }: TAPIFluffResponse = await response.json();

  return {
    productsList,
  };
}

// const [productsList, setProductsList] = useState<TProduct[]>([]);

// useEffect(() => {
//   // Client side rendered -> useEffect siempre trabaja en el browser
//   window -> solo funciona en los browsers
//     .fetch("api/fluffs")
//     .then((response) => response.json())
//     .then(({ data }) => setProductsList(data));
// }, []);
export default async function Page() {
  const { productsList } = await getData();

  return (
    <main>
      <KawaiiHeader />
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Link
          href="/yes-or-no"
          style={{ textDecoration: "none", color: "#4183c4" }}
        >
          ¿Debería comer un fluff hoy?
        </Link>
      </section>

      <ProductList products={productsList} />
    </main>
  );
}
