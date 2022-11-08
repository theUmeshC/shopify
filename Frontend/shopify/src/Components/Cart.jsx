/* eslint-disable react/static-property-placement */
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Cards, Basket } from '../UI/Cart';
import { cart } from '../Context/CartContext/context';
import NavCounter from './NavCounter';
import CartData from './CartData';

class Cart extends Component {
  static contextType = cart;

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  removeItemHandler = (product) => {
    const { cartState } = this.context;
    const { updateCartData } = this.context;
    const { dataState } = this.props;
    const existingCartItemIndex = cartState.findIndex((c) => c.id === product.id);
    const existingItem = cartState[existingCartItemIndex];
    let updatedItems;
    if (existingItem.qty === 1) {
      updatedItems = cartState.filter((item) => item.id !== product.id);
    } else {
      const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
      updatedItems = [...cartState];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const cartData = updatedItems;
    updateCartData(cartData);
    const existingRemoveItemIndex = dataState.dataState.productData.findIndex(
      (c) => c.id === product.id,
    );
    const existingRemoveItem = dataState.dataState.productData[existingRemoveItemIndex];
    const updatedItem = {
      ...existingRemoveItem,
      quantity: existingRemoveItem.quantity + 1,
    };
    const updatedRemoveItems = [...dataState.dataState.productData];
    updatedRemoveItems[existingRemoveItemIndex] = updatedItem;
    dataState.updateState(updatedRemoveItems);
  };

  render() {
    const { cartState } = this.context;
    return (
      <>
        <Container>
          <div className="title">
            <h1>Products</h1>
            <h1>Details</h1>
            <h1>Quantity</h1>
            <h1>Remove</h1>
          </div>
          <div className="cart__items">
            {cartState
              && cartState.map((value) => (
                <Cards key={Math.random()}>
                  <img src={value.imageURL} alt="" />
                  <div className="details">
                    <h4>{value.name}</h4>
                    <h5>
                      Price:
                      {value.price}
                    </h5>
                  </div>
                  <div className="quantity">
                    <h3>{value.qty}</h3>
                  </div>
                  <RemoveShoppingCartIcon
                    className="cart__icon"
                    onClick={() => {
                      this.removeItemHandler(value);
                    }}
                  />
                </Cards>
              ))}
          </div>
        </Container>
        <Basket>
          <h1>
            Total Quantity:
            <NavCounter />
          </h1>
          <h1>
            Total Amount :₹
            <CartData />
          </h1>
        </Basket>
      </>
    );
  }
}

Cart.propTypes = {
  dataState: PropTypes.instanceOf(Object).isRequired,
};

export default Cart;
