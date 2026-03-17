import { Product } from "../types";

interface Props {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductDetail({ product, onAddToCart }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-8">${product.price}</div>

          <button
            className="bg-black dark:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}