/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
// import { cartReducer } from './cartReducer';

const cart = createContext();

const Context = ({ children }) => {
  // const [state, dispatch] = useReducer(cartReducer, {
  //   cart: []
  // });
  const [cartState, setCartState] = useState([]);
  return <cart.Provider value={[cartState, setCartState]}>{children}</cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(cart);
};
