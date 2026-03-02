import { useState } from "react"; 
import ProductCard from "./ProductCard"; // Import the ProductCard component

/**
 * ProductGrid Component
 * ---------------------
 * Renders a grid of products using the ProductCard component.
 * Manages the cart state (addedItems) and passes it down to each ProductCard.
 *
 * Key Concepts:
 * - useState: stores cart items
 * - Array.map(): render a list of components from an array
 * - Props: passing down product data and cart state to child components
 */

// Static product data (hardcoded array, normally this would come from an API)
const products = [
  { id: 1, name: "Protein Powder", price: 29.99 },
  { id: 2, name: "Creatine Monohydrate", price: 19.99 },
  { id: 3, name: "Pre-Workout", price: 24.99 },
  { id: 4, name: "BCAA", price: 14.99 },
];

export default function ProductGrid() {
  
  /**
   * State: addedItems
   * -----------------
   * Array that stores products added to the cart.
   * Each item is an object: { id, quantity }
   * setAddedItems is the function to update the cart state.
   */
  const [addedItems, setAddedItems] = useState([]);

  return (
    /**
     * Grid container
     * ----------------
     * - Uses Tailwind CSS for a 3-column layout
     * - gap-8 adds spacing between grid items
     */
    <div className="grid grid-cols-3 gap-8">
      
      {/*
        Map over the products array and render a ProductCard for each product.
        - key: unique identifier for React's reconciliation algorithm
        - product: passes product info to the card
        - addedItems & setAddedItems: pass cart state so child can update it
      */}
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addedItems={addedItems}
          setAddedItems={setAddedItems}
        />
      ))}
    </div>
  );
}