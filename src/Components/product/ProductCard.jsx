import { useState } from "react";
import QuantitySelector from "../ui/QuantitySelector";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";

/**
 * ProductCard
 * -----------
 * - Manages local quantity state
 * - Adds product to cart with selected quantity
 * - If product already exists in cart → updates its quantity
 * - Button always shows "Add {quantity} to Cart"
 */

export default function ProductCard({ product }) {
  const dispatch = useDispatch(); // Get dispatch function from Redux store to dispatch actions to the cart slice. This allows the component to update the cart state in the Redux store when a product is added or its quantity is updated. By using dispatch, we can call the addToCart action creator from the cart slice, which will handle the logic of adding or updating items in the cart state based on the product and quantity provided.
  // Local quantity state (per product card)
  const [quantity, setQuantity] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartItems = useSelector(state => state.cart.items);

  /**
   * handleAdd
   * ---------
   * Adds or updates the product in the cart.
   *
   * Logic:
   * 1. Check if product already exists in cart
   * 2. If yes → update its quantity
   * 3. If no → add new item
   */
  // const handleAdd = () => {
  //   setCartItems(prev => {
  //     const existingItem = prev.find(item => item.id === product.id);

  //     // If product already exists → update quantity
  //     if (existingItem) {
  //       return prev.map(item =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + quantity }
  //           : item
  //       );
  //     }

  //     // If product does not exist → add new entry
  //     return [...prev, { id: product.id, quantity }];
  //   });
  // };
const handleAdd = () => {
  dispatch(cartActions.addToCart({ productId: product.id, quantity }));
  setIsModalOpen(true);
};

  const isAdded = cartItems.some(item => item.id === product.id);
  return (

    <div className="border p-4 rounded">
      {/* Image placeholder */}
      <img src={product.image} alt={product.title} className="h-40 rounded mb-4 mx-auto" />
      <h2 className="font-semibold">{product.title}</h2>
      <p>£{product.price}</p>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
      <Button onClick={handleAdd} className="mt-4">
         {isAdded ? "Added ✓" : `Add ${quantity} to Cart`}
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-semibold">
          Added to Cart 🎉
        </h2>
        <p>
          {quantity} × {product.name} added successfully.
        </p>
      </Modal>
    </div>
  );
}
