import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './actions';

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
  editable: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setOrigins(state, action) {
      state.origins = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
    setEditable(state, action) {
      state.editable = action.payload;
    },
    clearProductList(state) {
      state.list = [];
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

export const {
  setMinPrice,
  setMaxPrice,
  setOrigins,
  setEditable,
  setPage,
  clearProductList,
} = productsSlice.actions;

export default productsSlice.reducer;
