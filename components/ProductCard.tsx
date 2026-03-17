import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="h-80 flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
      <div className="h-48 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{product.title}</h2>
        <p className="text-xl font-bold text-green-600 dark:text-green-400">${product.price}</p>
      </div>
    </div>
  );
}