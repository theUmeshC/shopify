/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { cart } from '../Context/CartContext/context';

export default class CartData extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      static contextType = cart;
  render() {
    let totalSum = 0;
    this.context.cartState.map((value) => {
      return (totalSum += value.price * value.qty);
    });
    return (
      <span>{totalSum}</span>
    )
  }
}
