import { createSlice, current } from '@reduxjs/toolkit';
import { dataTypeContext } from '../Types/types';

interface cartStateType {
  items: dataTypeContext[]
  totalCount: number
  totalAmount: number
}
const initialCartState: cartStateType = {
  items: [],
  totalCount: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action: {
      payload: dataTypeContext
      type: string }) => {
      const currentState = current(state.items);
      if (state.totalCount > 0) {
        if (action.payload.quantity > 0) {
          const exist = currentState?.find(
            (item) => item.id === action.payload.id,
          );
          if (exist !== undefined) {
            const updatedCartItem = current(state.items)?.map((x) => (x.id === action.payload.id
              ? { ...x, qty: x.qty + 1, availQty: action.payload.quantity - 1 }
              : x));
            state.items = updatedCartItem;
            state.totalCount += 1;
            state.totalAmount += action.payload.price;
          } else {
            const updatedCartItem = [
              ...current(state.items),
              {
                ...action.payload,
                qty: 1,
                availQty: action.payload.quantity - 1,
              },
            ];
            state.items = updatedCartItem;
            state.totalCount += 1;
            state.totalAmount += action.payload.price;
          }
        }
      } else {
        const updatedCartItem = {
          ...action.payload,
          qty: 1,
          availQty: action.payload.quantity - 1,
        };
        state.items = [updatedCartItem];
        state.totalCount += 1;
        state.totalAmount += action.payload.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const currentState = current(state.items);
      const existingCartItemIndex = currentState.findIndex((c) => c.id === action.payload.id);
      const existingItem = currentState[existingCartItemIndex];
      let updatedItems;
      if (existingItem.qty === 1) {
        updatedItems = currentState.filter((item) => item.id !== action.payload.id);
        state.totalCount -= 1;
        state.totalAmount -= action.payload.price;
      } else {
        const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
        updatedItems = [...currentState];
        updatedItems[existingCartItemIndex] = updatedItem;
        state.totalCount -= 1;
        state.totalAmount -= action.payload.price;
      }
      const cartData = updatedItems;
      state.items = cartData;
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addItemToCart, removeItemFromCart } = actions;

export default reducer;
