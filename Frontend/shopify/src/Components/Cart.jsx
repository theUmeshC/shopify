import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Cards, Basket } from '../UI/Cart';
import { removeItemFromCart } from '../Store/cartSlice';
import { loadData } from '../Store/productSlice';

function Cart({ searchDisplay }) {
  const productDataRedux = useSelector((state) => state.productReducers.productData);
  const cartDataRedux = useSelector((state) => state.cartReducers.items);
  const cartCount = useSelector((state) => state.cartReducers.totalCount);
  const cartAmount = useSelector((state) => state.cartReducers.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    searchDisplay(false);
  }, []);

  const removeItemHandler = (product) => {
    dispatch(removeItemFromCart(product));
    const existingRemoveItemIndex = productDataRedux.findIndex((c) => c.id === product.id);
    const existingRemoveItem = productDataRedux[existingRemoveItemIndex];
    const updatedItem = {
      ...existingRemoveItem,
      quantity: existingRemoveItem.quantity + 1,
    };
    const updatedRemoveItems = [...productDataRedux];
    updatedRemoveItems[existingRemoveItemIndex] = updatedItem;
    dispatch(loadData(updatedRemoveItems));
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
          {cartDataRedux
            && cartDataRedux.map((value) => (
              <Cards key={Math.random()}>
                <img src={value.imageURL} alt="" />
                <div className="details">
                  <h5>{value.name}</h5>
                  <h6>
                    Price:
                    {value.price}
                  </h6>
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
            ))}
        </div>
      </Container>
      <Basket>
        <h1>
          Total Quantity:
          {cartCount}
        </h1>
        <h1>
          Total Amount :
          {`₹${cartAmount}`}
        </h1>
      </Basket>
    </>
  );
}

Cart.propTypes = {
  searchDisplay: PropTypes.func.isRequired,
};

export default Cart;
