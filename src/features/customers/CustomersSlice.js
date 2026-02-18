import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const getCustomers = createAsyncThunk(
  "customers/getCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) throw new Error();
      const data = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const customersSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCustomers.fulfilled, (state, action) => {
      state.loading = false;
      ((state.data = action.payload), (state.error = null));
    });
    builder.addCase(getCustomers.rejected, (state, action) => {
      state.loading = false;
      ((state.data = []), (state.error = action.payload));
    });
  },
});

export default customersSlice.reducer;
