/* eslint-disable react/static-property-placement */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { cart } from '../Context/CartContext/context';

export default class NavCounter extends Component {
  static contextType = cart;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let total = 0;
    const { cartState } = this.context;
    cartState.map((value) => (total += value.qty));
    return <span>{total}</span>;
  }
}
