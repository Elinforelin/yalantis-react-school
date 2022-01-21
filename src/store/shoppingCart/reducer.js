import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingCart: {},
  quantity: 0,
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;

      if (state.shoppingCart[id]) {
        state.shoppingCart[id] = {
          ...state.shoppingCart[id],
          count: state.shoppingCart[id].count + 1,
        };
      } else {
        state.shoppingCart[id] = { ...action.payload, count: 1 };
      }
      state.quantity += 1;
    },
    removeFromCart: (state, action) => {
      const id = action.payload.id;

      state.shoppingCart[id] = {
        ...state.shoppingCart[id],
        count: state.shoppingCart[id].count - 1,
      };

      state.quantity -= 1;
    },
    deleteTotallyFromCart: (state, action) => {
      const id = action.payload.id;

      state.quantity -= state.shoppingCart[id].count;

      delete state.shoppingCart[id];
    },
    cleanShoppingCart: (state) => {
      state.shoppingCart = {}
    }
  },
});

export const { addToCart, removeFromCart, deleteTotallyFromCart, cleanShoppingCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
