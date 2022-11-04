/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Cards, Basket } from '../UI/Cart';
import { removeItemFromCart } from '../Store/cartSlice';
import { removeFromCart } from '../Store/productSlice';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  removeItemHandler = (product) => {
    this.props.removeItemFromCart(product);
    const existingRemoveItemIndex = this.props.productData.findIndex(
      (c) => c.id === product.id,
    );
    const existingRemoveItem = this.props.productData[existingRemoveItemIndex];
    const updatedItem = {
      ...existingRemoveItem,
      quantity: existingRemoveItem.quantity + 1,
    };
    const updatedRemoveItems = [...this.props.productData];
    updatedRemoveItems[existingRemoveItemIndex] = updatedItem;
    this.props.removeFromCart(updatedRemoveItems);
    // const existingRemoveItemIndex = this.props.dataState.dataState.productData.findIndex(
    //   (c) => c.id === product.id,
    // );
    // const existingRemoveItem = this.props.dataState.dataState.productData[existingRemoveItemIndex];
    // const updatedItem = {
    //   ...existingRemoveItem,
    //   quantity: existingRemoveItem.quantity + 1,
    // };
    // const updatedRemoveItems = [...this.props.dataState.dataState.productData];
    // updatedRemoveItems[existingRemoveItemIndex] = updatedItem;
    // this.props.dataState.updateState(updatedRemoveItems);
  };

  render() {
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
            {this.props.cartReducers.items
              && this.props.cartReducers.items.map((value) => (
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
            {this.props.cartReducers.totalCount}
          </h1>
          <h1>
            Total Amount :₹
            {this.props.cartReducers.totalAmount}
          </h1>
        </Basket>
      </>
    );
  }
}

// Cart.propTypes = {
//   dataState: PropTypes.instanceOf(Object).isRequired,
// };

const mapStateToProps = (state) => {
  const { cartReducers } = state;
  const { productReducers } = state;
  const { productData, filteredData } = productReducers;
  return { cartReducers, productData, filteredData };
};
const mapDispatchToProps = { removeItemFromCart, removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
