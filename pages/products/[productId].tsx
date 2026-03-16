import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Product Id: {productId} </h1>
    </div>
  );
}
