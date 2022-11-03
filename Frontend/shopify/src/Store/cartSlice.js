/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCount: 0,
    totalAmont: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      console.log(state.items, state.totalCount, action.payload);
      if (state.totalCount > 0) {
        if (action.payload.quantity > 0) {
          const exist = this.state.items.find(
            (item) => item.id === action.payload.id,
          );
          if (exist && action.payload.availQty > 0) {
            const updatedCartItem = this.state.map((x) => (x.id === action.payload.id
              ? { ...x, qty: x.qty + 1, availQty: action.payload.quantity - 1 }
              : x));
            state.items = updatedCartItem;
            state.totalCount += 1;
            state.totalAmont += action.payload.amount;
          } else {
            const updatedCartItem = [
              ...state.items,
              {
                ...action.payload,
                qty: 1,
                availQty: action.payload.quantity - 1,
              },
            ];
            state.items = updatedCartItem;
            state.totalCount += 1;
            state.totalAmont += action.payload.amount;
          }
        }
      } else {
        const updatedCartItem = {
          ...action.payload,
          qty: 1,
          availQty: action.payload.quantity - 1,
        };
        state.items = updatedCartItem;
        state.totalCount += 1;
        state.totalAmont += action.payload.amount;
        // console.log(updatedCartItem);
      }
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addItemToCart } = actions;

export default reducer;
