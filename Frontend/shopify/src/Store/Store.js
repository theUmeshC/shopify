import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cartSlice';

const reducers = combineReducers({
  cartReducers,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
