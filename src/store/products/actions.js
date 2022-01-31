import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { fetchHelper } from './../../helpers/fetch';

export const originsSelectFetchStart = createAction('originsSelectFetchStart');
export const originsSelectFetchSuccess = createAction('originsSelectFetchSuccess');
export const originsSelectFetchError = createAction('originsSelectFetchError');

export const fetchAllProducts = createAsyncThunk(
  'products/fetchApi',
  async function (props) {
    const data = await fetchHelper(props);

    return data;
  }
);
