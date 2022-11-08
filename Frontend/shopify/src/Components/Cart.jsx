/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { productData } = this.props;
    this.props.removeItemFromCart(product);
    const existingRemoveItemIndex = productData.findIndex(
      (c) => c.id === product.id,
    );
    const existingRemoveItem = productData[existingRemoveItemIndex];
    const updatedItem = {
      ...existingRemoveItem,
      quantity: existingRemoveItem.quantity + 1,
    };
    const updatedRemoveItems = [...productData];
    updatedRemoveItems[existingRemoveItemIndex] = updatedItem;
    this.props.removeFromCart(updatedRemoveItems);
  };

  render() {
    const { cartReducers } = this.props;
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
            {cartReducers.items
              && cartReducers.items.map((value) => (
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
            {cartReducers.totalCount}
          </h1>
          <h1>
            Total Amount :₹
            {cartReducers.totalAmount}
          </h1>
        </Basket>
      </>
    );
  }
}

Cart.propTypes = {
  productData: PropTypes.instanceOf(Array).isRequired,
  cartReducers: PropTypes.instanceOf(Object).isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { cartReducers } = state;
  const { productReducers } = state;
  const { productData, filteredData } = productReducers;
  return { cartReducers, productData, filteredData };
};
const mapDispatchToProps = { removeItemFromCart, removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
