import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export default function Header() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            My Store
          </Link>
          <div className="flex items-center space-x-2">
            <Link href="/cart" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-gray-600 dark:text-gray-400">🛒</span>
              <span className="font-semibold text-gray-900 dark:text-white">Cart: {totalItems}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
