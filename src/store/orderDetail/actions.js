import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchHelper } from './../../helpers/fetch';

export const fetchOrderDetail = createAsyncThunk(
  'order/fetchApi',
  async function (props) {
    const response = await fetchHelper(props)

    const data = await response.json();
    return data;
  }
);