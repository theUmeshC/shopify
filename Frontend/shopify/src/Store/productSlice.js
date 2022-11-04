/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'cart',
  initialState: {
    productData: [],
    filteredData: [],
  },
  reducers: {
    loadData: (state, action) => {
      state.productData = action.payload;
      state.filteredData = action.payload;
    },
    updateFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    removeFromCart: (state, action) => {
      state.productData = action.payload;
      state.filteredData = action.payload;
    },
  },
});

const { actions, reducer } = productSlice;

export const { loadData, removeFromCart, updateFilteredData } = actions;

export default reducer;
