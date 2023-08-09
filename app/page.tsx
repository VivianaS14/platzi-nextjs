// Pagina estática porque no depende de un contenido externo
// Este siempre sera el index de la app
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <NavBar />
      <h1>Hello, Next.js!</h1>
      <p>It's a pleasure to meet you!</p>
      <hr />
      <div className="list-container">
        <ul>
          <li>
            <Link href="/product/100">Product 100</Link>
          </li>
          <li>
            <Link href="/product/101">Product 101</Link>
          </li>
          <li>
            <Link href="/product/102">Product 102</Link>
          </li>
          <li>
            <Link href="/product/103">Product 103</Link>
          </li>
          <li>
            <Link href="/product/104">Product 104</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
