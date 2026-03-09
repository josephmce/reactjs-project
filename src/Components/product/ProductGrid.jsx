import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../features/products/productsSlice";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGrid() {
  const dispatch = useDispatch();

  const { items: products, loading: loadingFromStore, error } = useSelector(
    state => state.products
  );

  // Local loading state for debugging/throttling
  const [loading, setLoading] = useState(true);

  // 1️⃣ Original fetch products effect
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // 2️⃣ Debug effect to simulate slow loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // stop fake loading after 5s
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Decide what to show based on loading / error / data
  if (loading || loadingFromStore) return <div className="grid grid-cols-3 gap-6">
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
  </div>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}