/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { cart } from '../Context/CartContext/context';

export default class NavCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = cart;
  render() {
    let total = 0;
    this.context.cartState.map((value) => {
      return (total += value.qty);
    });
    return <span>{total}</span>;
  }
}
