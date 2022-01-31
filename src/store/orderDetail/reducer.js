import { createSlice } from '@reduxjs/toolkit';

import { fetchOrderDetailStart, fetchOrderDetailSuccess, fetchOrderDetailError } from './actions';

const initialState = {
  order: {},
  status: '',
  error: '',
  editable: '',
};

const orderDetailSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderDetailStart, (state) => {
      state.status = 'loading';
      state.error = '';
    })
    builder.addCase(fetchOrderDetailSuccess, (state, action) => {
      state.status = 'resolved';
      state.order = action.payload;
      state.error = '';
    })
    builder.addCase(fetchOrderDetailError, (state) => {
      state.status = 'error';
    })

    // Change logic according to HM#4      

    // [fetchOrderDetail.pending]: (state) => {
    //   state.status = 'loading';
    //   state.error = '';
    // },
    // [fetchOrderDetail.fulfilled]: (state, action) => {
    //   state.status = 'resolved';
    //   state.order = action.payload;
    //   state.error = '';
    // },
    // [fetchOrderDetail.rejected]: (state) => {
    //   state.status = 'error';
    // },
  },
});

export default orderDetailSlice.reducer;


