import { createSlice } from '@reduxjs/toolkit';
import { createOrderError, createOrderStart, createOrderSucces, fetchOrders } from './actions';

const initialState = {
  list: [],
  status: '',
  error: '',
  editable: '',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrderStart, (state) => {
      state.status = 'loading';
      state.error = '';
    })
    builder.addCase(createOrderSucces, (state, action) => {
      state.status = 'resolved';
      state.list = action.payload.items;
      state.error = '';
    })
    builder.addCase(createOrderError, (state) => {
      state.status = 'error';
    })
    
    // Change logic according to HM#4      

    // [fetchOrders.pending]: (state) => {
    //   state.status = 'loading';
    //   state.error = '';
    // },
    // [fetchOrders.fulfilled]: (state, action) => {
    //   state.status = 'resolved';
    //   state.list = action.payload.items;
    //   state.error = '';
    // },
    // [fetchOrders.rejected]: (state) => {
    //   state.status = 'error';
    // },
  },
});

export default orderSlice.reducer;
