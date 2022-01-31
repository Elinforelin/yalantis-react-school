import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchHelper } from './../../helpers/fetch';

export const fetchProduct = createAsyncThunk(
  'product/fetchApi',
  async function (props) {
    const data = await fetchHelper(props);

    return data;
  }
);
