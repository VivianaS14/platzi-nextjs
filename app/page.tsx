"use client";

// Pagina estática porque no depende de un contenido externo
// Este siempre sera el index de la app
import { useEffect, useState } from "react";
import Link from "next/link";
import { TProduct } from "index";
import KawaiiHeader from "@components/KawaiiHeader/KawaiiHeader";
import ProductList from "@components/ProductList/ProductList";

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
