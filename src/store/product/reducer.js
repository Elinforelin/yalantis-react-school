import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './actions';


const initialState = {
  product: {},
  status: '',
  error: '',
};

const oneProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    removeProductDetails: (state) => {
      state.product = {}
    }
  },
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.product = action.payload;
      state.error = '';
    },
    [fetchProduct.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export const { removeProductDetails } = oneProductSlice.actions

export default oneProductSlice.reducer;
