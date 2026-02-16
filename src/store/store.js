import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/features/products/ProductsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
