import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  //it gets the productId and quantity from the action payload, and updates the cart state accordingly. If the product is already in the cart, it increments the quantity; otherwise, it adds a new item to the cart.
  initialState: { items: [] }, // { productId, quantity }
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload; // extract minimal info
      const existing = state.items.find(item => item.productId === productId);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    //clearCart reducer simply resets the cart's items array to an empty array, effectively removing all items from the cart after a successful checkout.
    clearCart: (state) => {
      state.items = [];
    },
  },
});
  
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;