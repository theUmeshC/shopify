import styled from "styled-components";
import { CartState } from "../Context/context";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { removeFromCart } from "../Context/cartHandler";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-radius: 15px;
    background: #f8f6f6;
    box-shadow: 18px 18px 14px #cfcfcf, -18px -18px 14px #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 390px;
  .cart__items {
    overflow-y: auto;
  }
  .cart__items::-webkit-scrollbar {
    width: 16px;
    border-radius: 15px;
    height: 100%;
  }
  .cart__items::-webkit-scrollbar-track {
    background-color: white;
  }
  .cart__items::-webkit-scrollbar-thumb {
    background-color: #597ef7;
    border-radius: 15px;
    border: 3px solid #ffffff;
  }

  .cart__items::-webkit-scrollbar-thumb:hover {
    background-color: #3766ff;
  }

  .title {
    border-radius: 15px;
    position: sticky;
    padding: 10px 0px;
    top: 0;
    z-index: 1;
    background-color: #c2e2fe;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
      font-size: 15px;
      font-weight: bold;
    }
  }
`;
const Cards = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 70px;
    border-radius: 50%;
  }
  .cart__icon {
    background-color: #ff5709;
    padding: 5px;
    border-radius: 50%;
    color: white;
    transition: 0.3s;
    box-sizing: border-box;
    font-size: 30px;
  }
  .cart__icon:hover {
    background-color: #ff0000;
    scale: 1.2;
  }
  .cart__icon:active {
    background-color: white;
    color: #ebae12;
    border: 1px solid #ebae12;
  }
`;
const Basket = styled.div`
  position: absolute;
  bottom: 1vh;
  display: flex;
  width: 100vw;
  text-align: center;
  flex-direction: column;
  h1 {
    font-size: 20px;
  }
`;

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
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
