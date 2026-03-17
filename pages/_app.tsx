import type { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}