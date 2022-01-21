
import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from './actions';

const initialState = {
  list: [],
  status: '',
  error: '',
  editable: ''
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.list = action.payload.items
      state.error = '';
    },
    [fetchOrders.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default orderSlice.reducer;
