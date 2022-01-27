import { configureStore } from '@reduxjs/toolkit';
import shoppingCartSlice from './shoppingCart/reducer';
import productsSlice from './products/reducer';
import oneProductSlice from './product/reducer';
import modalSlice from './modal/reducer';
import orderSlice from './orders/reducer';
import orderDetailSlice from './orderDetail/reducer';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    productsList: productsSlice,
    productDetails: oneProductSlice,
    ordersList: orderSlice,
    orderDetails: orderDetailSlice,
    modalWindow: modalSlice,
  },
});
