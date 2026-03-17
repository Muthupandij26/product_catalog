import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Your Cart</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Your cart is empty</p>
          <Link href="/" className="bg-black dark:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center space-x-4">
              <img
                src={item.product.thumbnail}
                alt={item.product.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.product.title}</h3>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">${item.product.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  -
                </button>
                <span className="text-lg font-semibold text-gray-900 dark:text-white min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Items ({totalItems})</span>
              <span className="text-gray-900 dark:text-white">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span className="text-gray-900 dark:text-white">Total</span>
              <span className="text-green-600 dark:text-green-400">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-black dark:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors mt-6">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}