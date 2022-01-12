import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
  'product/fetchApi',
  async function (endpoints) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${endpoints}`
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  product: {},
  status: '',
  error: '',
};

const oneProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
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

export default oneProductSlice.reducer;
