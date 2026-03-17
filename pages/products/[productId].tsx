import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Product } from "../../types";
import { CartContext } from "../../context/CartContext";
import ProductDetailComponent from "../../components/ProductDetail";

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (!productId) return;

    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load product");
      })
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600 dark:text-gray-400">Loading product...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <ProductDetailComponent
      product={product}
      onAddToCart={() => addToCart(product)}
    />
  );
}