import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchApi = createAsyncThunk(
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
    [fetchApi.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchApi.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.product = action.payload;
      state.error = '';
    },
    [fetchApi.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default oneProductSlice.reducer;
