
import { createSlice } from '@reduxjs/toolkit';

import { fetchOrderDetail } from './actions';

const initialState = {
  order: {},
  status: '',
  error: '',
  editable: ''
};

const orderDetailSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchOrderDetail.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchOrderDetail.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.order = action.payload
      state.error = '';
    },
    [fetchOrderDetail.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default orderDetailSlice.reducer;
