/* eslint-disable prettier/prettier */

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Container, Cards, Basket } from '../UI/Cart';
import { CartState } from '../Context/CartContext/context';
import { DataState } from '../Context/DataContext/dataContext';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Cart = (props) => {
  const { productDataKey, filteredDataKey } = DataState();
  const [productData, setProductData] = productDataKey;
  const [, setFilteredData] = filteredDataKey;
  const [cartState, setCartState] = CartState();
  let totalSum = 0;

  cartState.map((value) => {
    return (totalSum += value.price * value.qty);
  });

  let total = 0;
  cartState.map((value) => {
    return (total += value.qty);
  });

  useEffect(() => {
    props.searchDisplay(false);
  }, [props]);

  const removeItemHandler = (product) => {
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
    setCartState(cartData);
    const existingRemoveItemIndex = productData.findIndex((c) => c.id === product.id);
    const existingRemoveItem = productData[existingRemoveItemIndex];
    let updatedRemoveItems;
    const updatedItem = {
      ...existingRemoveItem,
      quantity: existingRemoveItem.quantity + 1,
    };
    updatedRemoveItems = [...productData];
    updatedRemoveItems[existingRemoveItemIndex] = updatedItem;
    setProductData(updatedRemoveItems);
    setFilteredData(updatedRemoveItems);
  };

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
          {cartState &&
            cartState.map((value, i) => {
              return (
                <Cards key={i}>
                  <img src={value.imageURL} alt="" />
                  <div className="details">
                    <h5>{value.name}</h5>
                    <h6>Price:{value.price}</h6>
                  </div>
                  <div className="quantity">
                    <h4>{value.qty}</h4>
                  </div>
                  <RemoveShoppingCartIcon
                    className="cart__icon"
                    onClick={() => {
                      removeItemHandler(value);
                    }}
                  />
                </Cards>
              );
            })}
        </div>
      </Container>
      <Basket>
        <h1>Total Quantity:{total}</h1>
        <h1>Total Amount :{`₹${totalSum}`}</h1>
      </Basket>
    </>
  );
};

Cart.propTypes = {
  searchDisplay: PropTypes.func,
};

export default Cart;
