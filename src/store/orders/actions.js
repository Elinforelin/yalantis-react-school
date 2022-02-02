import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchHelper } from './../../helpers/fetch';

export const createOrderStart = createAction('createOrderStart');
export const createOrderSucces = createAction('createOrderSucces');
export const createOrderError = createAction('createOrderError');

    // Change logic according to HM#4      

// export const fetchOrders = createAsyncThunk(
//   'orders/fetchApi',
//   async function (props) {
//     const data = await fetchHelper(props);

//     return data;
//   }
// );
