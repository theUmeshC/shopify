/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';

const cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: []
  });
  return <cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(cart);
};
