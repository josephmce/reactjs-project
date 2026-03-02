/**
 * ProductCard Component
 * ---------------------
 * Renders an individual product card inside the product grid.
 *
 * Responsibilities:
 * - Displays product name and price
 * - Manages its own quantity state
 * - Uses QuantitySelector to modify quantity
 * - Adds product to cart with selected quantity
 * - Prevents duplicate products from being added
 *
 * Props:
 * @param {Object} product - The product object (id, name, price)
 * @param {Array} addedItems - Current cart items from parent state
 * @param {Function} setAddedItems - State setter function from parent
 *
 * Key Concepts Used:
 * - React useState (local component state)
 * - Lifting state up (cart lives in parent)
 * - Functional state updates
 * - Array.find() and Array.some()
 * - Conditional rendering
 * - Immutable state updates
 */

import { useState } from "react";
import QuantitySelector from "./QuantitySelector";

export default function ProductCard({ product, addedItems, setAddedItems }) {
  
  /**
   * Local state for this product's quantity.
   * Default value is 1.
   * Each ProductCard manages its own quantity independently.
   */
  const [quantity, setQuantity] = useState(1);

  /**
   * handleAdd
   * ---------
   * Adds this product to the cart.
   *
   * Uses functional state update:
   * - React passes the previous state into the callback (prev)
   * - This guarantees we are working with the latest state
   * - Important because state updates are asynchronous
   *
   * Logic:
   * 1. Check if product already exists in cart
   * 2. If it exists → return previous state (no duplicates)
   * 3. If it does not exist → return a new array with the product added
   */
  const handleAdd = () => {
    setAddedItems(prev => {
      // Check if this product is already in the cart
      const exists = prev.find(item => item.id === product.id);

      if (exists) {
        return prev; // Prevent duplicate entries
      }

      // Return a NEW array (immutability)
      return [...prev, { id: product.id, quantity }];
    });
  };

  /**
   * isAdded
   * -------
   * Boolean value that checks whether this product
   * already exists in the cart.
   *
   * Used for conditional rendering of button text.
   */
  const isAdded = addedItems.some(item => item.id === product.id);

  return (
    <div className="border p-4 rounded">
      
      {/* Product Name */}
      <h2 className="font-semibold">{product.name}</h2>

      {/* Product Price */}
      <p>£{product.price}</p>

      {/* 
        QuantitySelector Component
        --------------------------
        Controlled component pattern:
        - quantity is passed as a prop
        - setQuantity updates this component's state
        - QuantitySelector does NOT own state
      */}
      <QuantitySelector
        quantity={quantity}
        setQuantity={setQuantity}
      />

      {/* 
        Add to Cart Button
        ------------------
        - Calls handleAdd when clicked
        - Uses conditional rendering:
            If product is already added → show "Added ✓"
            Otherwise → show "Add {quantity} to Cart"
      */}
      <button
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {isAdded ? "Added ✓" : `Add ${quantity} to Cart`}
      </button>
    </div>
  );
}