// path alias the one who allow the @ to find the file -> you can find in tsconfig.ts
import NavBar from "@components/NavBar/NavBar";
import Footer from "@components/Footer/Footer";
import { Lato } from "next/font/google";
import "./global.css";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <head>
        {/* favicon */}
        {/* web font */}
        {/* stylesheet */}
        {/* script/js */}
      </head>
      <body className="my-body-class">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
