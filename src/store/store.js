import { configureStore } from '@reduxjs/toolkit';
import shoppingCartSlice from './shoppingCart/reducer';
import productsSlice from './products/reducer';
import oneProductSlice from './product/reducer';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    productsList: productsSlice,
    productDetails: oneProductSlice,
  },
});
