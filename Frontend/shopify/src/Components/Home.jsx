/* eslint-disable max-len */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import React, { Component } from 'react';
import Dashboard from './DashBoard';
import SideBar from './SideBar';
import { cart } from '../Context/CartContext/context';

export default class Home extends Component {
  static contextType = cart;

  constructor(props) {
    super(props);
    this.state = {};
  }

  cartDataHandler = (product) => {
    const selectedItemQuantity = product.quantity;
    if (this.context.cartState.length > 0) {
      if (selectedItemQuantity > 0) {
        const exist = this.context.cartState.find((x) => x.id === product.id);
        if (exist) {
          const cartData = this.context.cartState.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1, availQty: product.quantity - 1 } : x));
          this.context.updateExistingCartData(cartData);
        } else {
          const cartData = [
            ...this.context.cartState,
            {
              ...product,
              qty: 1,
              availQty: product.quantity - 1,
            },
          ];
          this.context.updateCart(cartData);
        }
      } else {
        toast.error('🦄 Out of Stock!');
      }
    } else {
      const cartData = {
        ...product,
        qty: 1,
        availQty: product.quantity - 1,
      };
      this.context.initialUpdate(cartData);
    }
  };

  render() {
    return (
      <div className="wrapper">
        {this.props.data && <SideBar data={this.props.data} />}
        <Dashboard
          className=""
          loading={this.props.loading}
          onItemAddedTOCart={this.cartDataHandler}
          searchDisplay={this.props.searchDisplay}
        />
      </div>
    );
  }
}
