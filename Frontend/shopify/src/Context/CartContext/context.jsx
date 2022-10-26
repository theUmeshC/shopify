/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext } from 'react';
import React, { Component } from 'react';

export const cart = createContext();

export default class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartState: []
    };
  }
  setCartData = (value) => {
    this.setState({
      cartState: [...value]
    });
  };
  initialUpdate = (value) => {
    this.setState({
      cartState: [...this.state.cartState, value]
    });
  };

  updateExistingCartData = (value) => {
    this.setState({
      cartState: [...value]
    });
  };
  updateCartData = (value) => {
    this.setState({ cartState: value });
  };
  render() {
    return (
      <cart.Provider
        value={{
          cartState: this.state.cartState,
          updateCart: this.setCartData,
          updateCartData: this.updateCartData,
          updateExistingCartData: this.updateExistingCartData,
          initialUpdate: this.initialUpdate
        }}>
        {this.props.children}
      </cart.Provider>
    );
  }
}