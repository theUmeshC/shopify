/* eslint-disable prettier/prettier */
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Container, Cards, Basket } from '../UI/Cart';
import { DataState } from '../Context/DataContext/dataContext';
import { CartState } from '../Context/CartContext/context';
import { addQuantity } from '../Context/DataContext/dataHandler';

const Cart = () => {
  const [cartState, setCartState] = CartState();
  const { dispatchData } = DataState();
  let totalSum = 0;
  cartState.map((value) => {
    return (totalSum += value.price * value.qty);
  });
  let total = 0;
  cartState.map((value) => {
    return (total += value.qty);
  });
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
    dispatchData(addQuantity(product));
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
                    <h4>{value.name}</h4>
                    <h5>Price:{value.price}</h5>
                  </div>
                  <div className="quantity">
                    <h3>{value.qty}</h3>
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

export default Cart;
