// features/products/productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch products from API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    // Normalize and sanitize API data
    return data.map((item) => ({
      id: item.id ?? Math.random(),               // fallback id
      title: item.title?.trim() || "Untitled",   // fallback title
      price: Number(item.price) || 0,            // fallback price
      image: item.image || "/placeholder.png",   // fallback image
      description: item.description?.trim() || "", // optional
      category: item.category?.trim() || "misc",  // optional
    }));
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;