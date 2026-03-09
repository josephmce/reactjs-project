// components/products/ProductCardSkeleton.jsx

/**
 * ProductCardSkeleton
 * -------------------
 * Displays a loading placeholder that mimics the layout
 * of a ProductCard while product data is being fetched.
 *
 * Uses Tailwind's animate-pulse utility to create
 * a subtle skeleton loading effect.
 */

export default function ProductCardSkeleton() {
  return (
    <div className="border p-4 rounded shadow-sm animate-pulse">

      {/* Image placeholder */}
      <div className="h-40 w-full bg-gray-200 rounded mb-4"></div>

      {/* Product title */}
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

      {/* Price */}
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>

      {/* Quantity selector placeholder */}
      <div className="flex gap-2 mb-4">
        <div className="h-8 w-8 bg-gray-200 rounded"></div>
        <div className="h-8 w-10 bg-gray-200 rounded"></div>
        <div className="h-8 w-8 bg-gray-200 rounded"></div>
      </div>

      {/* Add to cart button */}
      <div className="h-10 bg-gray-200 rounded"></div>

    </div>
  );
}