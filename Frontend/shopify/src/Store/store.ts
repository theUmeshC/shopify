/* eslint-disable */
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cartSlice';
import productReducers from './productSlice';

const reducers = combineReducers({
  cartReducers,
  productReducers,
});
const store = configureStore({
  reducer: reducers,
});

export type IRootState = ReturnType<typeof reducers>;

export default store;
