import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { dataTypeContext } from '../Helper/types';
import { removeItemFromCart } from '../Store/cartSlice';
import { loadData } from '../Store/productSlice';
import { IRootState } from '../Store/store';
import useStyles from '../UI/CartStyles';

interface Iprops {
  searchDisplay: (val: boolean) => void
};

const Cart: React.FC<Iprops> = ({ searchDisplay }) => {
  const classes = useStyles();
  const productDataRedux = useSelector((state: IRootState) => state.productReducers.productData);
  const cartDataRedux = useSelector((state: IRootState) => state.cartReducers.items);
  const cartCount = useSelector((state: IRootState) => state.cartReducers.totalCount);
  const cartAmount = useSelector((state: IRootState) => state.cartReducers.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    searchDisplay(false);
  }, []);

  const removeItemHandler: (product: dataTypeContext) => void = (product: dataTypeContext) => {
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
      <div className={classes.cart_container}>
        <div className={classes.cart_titles}>
          <h1>Products</h1>
          <h1>Details</h1>
          <h1>Quantity</h1>
          <h1>Remove</h1>
        </div>
        <div className={classes.cart_items_container}>
          {
            cartDataRedux.map((value) => (
              <div className={classes.cart_items} key={uuidv4()}>
                <img src={value.imageURL} alt="" />
                <div className={classes.cart_items_details}>
                  <h5>{value.name}</h5>
                  <h6>
                    Price:
                    {value.price}
                  </h6>
                </div>
                <div className={classes.cart_items_quantity}>
                  <h4>{value.qty}</h4>
                </div>
                <RemoveShoppingCartIcon
                  className={classes.cart_items_cart__icon}
                  onClick={() => {
                    removeItemHandler(value);
                  }}
                />
              </div>
            ))}
        </div>
      </div>
      <div className={classes.cart_basket}>
        <h1>
          Total Quantity:
          <span>
            {cartCount}
          </span>
        </h1>
        <h1>
          Total Amount :
          <span>
            {`₹${cartAmount}.00`}
          </span>
        </h1>
      </div>
    </>
  );
}

Cart.propTypes = {
  searchDisplay: PropTypes.func.isRequired,
};

export default Cart;
