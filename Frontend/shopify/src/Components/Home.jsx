/* eslint-disable max-len */
/* eslint-disable react/static-property-placement */
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
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
    const { cartState } = this.context;
    const { updateExistingCartData } = this.context;
    const { updateCart } = this.context;
    const { initialUpdate } = this.context;
    const selectedItemQuantity = product.quantity;
    if (cartState.length > 0) {
      if (selectedItemQuantity > 0) {
        const exist = cartState.find((x) => x.id === product.id);
        if (exist) {
          const cartData = cartState.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1, availQty: product.quantity - 1 } : x));
          updateExistingCartData(cartData);
        } else {
          const cartData = [
            ...cartState,
            {
              ...product,
              qty: 1,
              availQty: product.quantity - 1,
            },
          ];
          updateCart(cartData);
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
      initialUpdate(cartData);
    }
  };

  render() {
    const { data } = this.props;
    const { loading } = this.props;
    return (
      <div className="wrapper">
        {data && <SideBar data={data} />}
        <Dashboard
          className=""
          loading={loading}
          onItemAddedTOCart={this.cartDataHandler}
        />
      </div>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};
