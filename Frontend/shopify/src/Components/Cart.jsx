import { CartState } from "../Context/context";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { removeFromCart } from "../Context/cartHandler";
import { Container, Cards, Basket} from '../UI/Cart'
import { DataState } from "../Context/Data/dataContext";
import { addQuantity } from "../Context/Data/dataHandler";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { dispatchData } = DataState();

  let totalSum = 0;
  cart.map((value) => {
    return (totalSum += value.price * value.qty);
  });
  let total = 0;
  cart.map((value) => {
    return (total += value.qty);
  });

  const removeItemHandler = (item) => {
    dispatch(removeFromCart(item));
    dispatchData(addQuantity(item));
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
          {cart &&
            cart.map((value, i) => {
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
