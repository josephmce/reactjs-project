// Import Redux hooks for state management
import { useSelector, useDispatch } from "react-redux";
// Import React hooks for side effects and state management
import { useEffect, useState } from "react";
// Import the async thunk to fetch products from API
import { fetchProducts } from "../../features/products/productsSlice";

// Import the product card component
import ProductCard from "./ProductCard";
// Import the skeleton loader component
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";

// Main component to display a grid of products with filtering and sorting
export default function ProductGrid() {

  // Initialize dispatch function for Redux actions
  const dispatch = useDispatch();

  // Destructure products data and loading/error states from Redux store
  const { items: products, loading, error } = useSelector(
    state => state.products
  );

  // State for the selected category filter. categoryFilter and setCategoryFilter are used to manage the current category filter applied to the product list. The categoryFilter state holds the currently selected category (e.g., "all", "electronics", "jewelery", etc.), while the setCategoryFilter function is used to update this state when the user selects a different category from the dropdown. This allows the component to dynamically filter the displayed products based on the user's selection.
  //const [categoryFilter, setCategoryFilter] = useState("all"); removeing this as i dont need it to be state as i will be using search params instead
  const [searchParams] = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get("category") || "all");
    //const [priceSort, setPriceSort] = useState("none"); removing this as i dont need it to be state as i will be using search params instead
  const [priceSort, setPriceSort] = useState(searchParams.get("sort") || "none");
  // State for the selected price sort order
  // Update local state whenever the URL changes
  useEffect(() => {
    setCategoryFilter(searchParams.get("category") || "all");
    setPriceSort(searchParams.get("sort") || "none");
  }, [searchParams]);


  // Fetch products from API when component first mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Create a filtered and sorted copy of products based on current UI state
  const visibleProducts = [...products]
    // Filter products by selected category. .filter is a JavaScript array method that creates a new array with all elements that pass the test implemented by the provided function. In this case, it is used to filter the products based on the selected category. The filter function checks if the categoryFilter state is set to "all". If it is, it returns true for all products, meaning no filtering is applied. If categoryFilter is set to a specific category (e.g., "electronics"), it compares the product's category with the selected category and only returns true for products that match, effectively filtering the product list to show only items from the selected category.
    .filter(product => {
      if (categoryFilter === "all") 
      return true;
    //this is like an else statement. If the categoryFilter is set to "all", it returns true for all products, meaning no filtering is applied. If categoryFilter is set to a specific category (e.g., "electronics"), it compares the product's category with the selected category and only returns true for products that match, effectively filtering the product list to show only items from the selected category.
      // Only include products that match the selected category. The filter function checks if the categoryFilter state is set to "all". If it is, it returns true for all products, meaning no filtering is applied. If categoryFilter is set to a specific category (e.g., "electronics"), it compares the product's category with the selected category and only returns true for products that match, effectively filtering the product list to show only items from the selected category.
      return product.category === categoryFilter;
    })
    // Sort products by price if a sort option is selected
    .sort((a, b) => {
      if (priceSort === "low-high") return a.price - b.price;
      if (priceSort === "high-low") return b.price - a.price;
      return 0;
    });

  // Show skeleton loaders while data is being fetched
  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-6">
        {/* Create 6 skeleton placeholders */}
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Show error message if API request fails
  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md max-w-md text-center">
          <h2 className="text-xl font-semibold mb-2">Oops!</h2>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  // Render the main UI with filters and product grid
  return (
    <div>

      {/* Container for filter and sort dropdown controls */}
      <div className="flex gap-4 mb-6">

        {/* Category filter dropdown */}
        <select
          value={categoryFilter}
          //onChange={(e) => setCategoryFilter(e.target.value)} -  removing this as i will be using search params instead
          //This will update the URL search parameters to reflect the selected category filter. When the user selects a different category from the dropdown, the onChange event handler is triggered, which calls setSearchParams to update the URL with the new category value. This allows for better user experience as the selected filter is reflected in the URL, making it shareable and bookmarkable.
          onChange={(e) =>
            setSearchParams({
              category: e.target.value,
              sort: priceSort
            })
          }
          className="border p-2 rounded bg-[#242424] text-white"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewellery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        {/* Price sort dropdown */}
        <select
          value={priceSort}
          //onChange={(e) => setPriceSort(e.target.value)} -  removing this as i will be using search params instead
          //This will update the URL search parameters to reflect the selected price sort order. When the user selects a different sort option from the dropdown, the onChange event handler is triggered, which calls setSearchParams to update the URL with the new sort value. This allows for better user experience as the selected sort order is reflected in the URL, making it shareable and bookmarkable.
          onChange={(e) =>
            setSearchParams({
              category: categoryFilter,
              sort: e.target.value
            })
          }
          className="border p-2 rounded bg-[#242424] text-white"
        >
          <option value="none">
            Sort by Price
          </option>
          <option value="low-high">
            Price: Low → High
          </option>
          <option value="high-low">
            Price: High → Low
          </option>
        </select>

      </div>

      {/* Display filtered and sorted products in a 3-column grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Map through visible products and render each one */}
        {visibleProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}