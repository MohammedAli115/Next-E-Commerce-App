import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/features/products/ProductsSlice";
import customersSlice from "@/features/customers/CustomersSlice"

export const store = configureStore({
  reducer: {
    products: productsSlice,
    customers: customersSlice,
  },
});
