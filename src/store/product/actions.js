import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchHelper } from './../../helpers/fetch';

export const fetchProduct = createAsyncThunk(
  'product/fetchApi',
  async function (props) {
    const response = await fetchHelper(props)

    const data = await response.json();
    return data;
  }
);