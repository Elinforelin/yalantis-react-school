import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalActive: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalActive: (state, action) => {
      state.modalActive = !state.modalActive
    }
  },
});

export const { setModalActive} =
  modalSlice.actions;

export default modalSlice.reducer;
