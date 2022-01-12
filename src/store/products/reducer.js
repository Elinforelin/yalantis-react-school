import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchApi',
  async function (endpoints) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${endpoints}`
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  list: [],
  perPage: 50,
  totalItems: 0,
  page: 1,
  origins: [],
  minPrice: 0,
  maxPrice: 0,
  status: '',
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setOrigins(state, action) {
      state.origins = action.payload;
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.list = action.payload.items;
      state.totalItems = action.payload.totalItems;
      state.perPage = action.payload.perPage;
      state.page = action.payload.page;
      state.error = '';
    },
    [fetchAllProducts.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export const { setMinPrice, setMaxPrice, setOrigins } = productsSlice.actions;

export default productsSlice.reducer;
