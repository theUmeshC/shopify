/* eslint-disable prettier/prettier */
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const cart = createContext();

const Context = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  return <cart.Provider value={[cartState, setCartState]}>{children}</cart.Provider>;
};

Context.propTypes = {
  children: PropTypes.element.isRequired
};

export default Context;

export const CartState = () => {
  return useContext(cart);
};
