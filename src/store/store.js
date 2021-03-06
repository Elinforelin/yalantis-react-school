import { configureStore, getDefaultMiddleware, } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import shoppingCartSlice from './shoppingCart/reducer';
import productsSlice from './products/reducer';
import oneProductSlice from './product/reducer';
import modalSlice from './modal/reducer';
import orderSlice from './orders/reducer';
import orderDetailSlice from './orderDetail/reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: true }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    productsList: productsSlice,
    productDetails: oneProductSlice,
    ordersList: orderSlice,
    orderDetails: orderDetailSlice,
    modalWindow: modalSlice,
  },
  middleware,
});

sagaMiddleware.run(rootSaga)
