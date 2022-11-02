/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { cart } from '../Context/CartContext/context';

export default class CartData extends Component {
  static contextType = cart;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let totalSum = 0;
    this.context.cartState.map((value) => (totalSum += value.price * value.qty));
    return <span>{totalSum}</span>;
  }
}
