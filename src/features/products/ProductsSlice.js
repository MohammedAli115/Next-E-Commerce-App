import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) throw new Error("Fetch Is Failed");
    const data = await response.json();
    console.log(data.products);
    return data.products;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      ((state.data = action.payload), (state.error = null));
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      ((state.data = []), (state.error = action.payload));
    });
  },
});

export default productsSlice.reducer;
