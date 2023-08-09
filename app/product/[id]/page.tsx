import Link from "next/link";

export default function Page({ params }) {
  return (
    <div>
      <h3>Esta es la pagina de producto.</h3>
      <p>My ID: {params.id}</p>
      <hr />

      <button>
        <Link href="/">Go Back</Link>
      </button>
    </div>
  );
}
