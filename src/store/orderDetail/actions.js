import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchHelper } from './../../helpers/fetch';

export const fetchOrderDetailStart = createAction('fetchOrderDetailStart')
export const fetchOrderDetailSuccess = createAction('fetchOrderDetailSuccess')
export const fetchOrderDetailError = createAction('fetchOrderDetailError')

    // Change logic according to HM#4      

// export const fetchOrderDetail = createAsyncThunk(
//   'order/fetchApi',
//   async function (props) {
//     const response = await fetchHelper(props);

//     const data = await response.json();
//     return data;
//   }
// );
