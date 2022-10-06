import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 550px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 390px;
  margin: auto;

  .cart__items {
    overflow-y: scroll;
  }
  .cart__items::-webkit-scrollbar {
    width: 16px;
    border-radius: 10px;
    height: 100%;
  }
  .cart__items::-webkit-scrollbar-track {
    background-color: white;
  }
  .cart__items::-webkit-scrollbar-thumb {
    background-color: #597ef7;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .title {
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
      margin-left: 50px;
    }
  }
`;
const Cards = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    /* width: 90px; */
    width: 90px;
    border-radius: 50%;
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

const Cart = (props) => {
  const data = props.data;
  const [cloneData, setCloneData] = useState([]);
  const total = data.length;
  const totalSum = data
    .map((value) => {
      return value.price;
    })
    .reduce((acc, a) => {
      return acc + a;
    }, 0);
  props.searchDisplay(false);

  useEffect(() => {
    let cartArray = [];
    const mapData = new Map(
      Object.entries(
        data.reduce((acc, curr) => {
          const str = JSON.stringify(curr);
          acc[str] = (acc[str] || 0) + 1;
          return acc;
        }, {})
      )
    );
    for (let [key, value] of mapData) {
      let element = JSON.parse(key);
      element.cartQuantity = value;
      cartArray.push(element);
      console.log(cartArray);
    }
    setCloneData(cartArray);
  }, [data]);

  return (
    <div>
      <Container>
        <div className="title">
          <h1>Products</h1>
          <h1>Details</h1>
          <h1>Quantity</h1>
        </div>
        <div className="cart__items">
          {cloneData &&
            cloneData.map((value, i) => {
              return (
                <Cards key={i}>
                  <img src={value.imageURL} alt="" />
                  <div className="details">
                    <h4>{value.name}</h4>
                    <h5>Price:{value.price}</h5>
                  </div>
                  <div className="quantity">
                    <h3>{value.cartQuantity}</h3>
                  </div>
                </Cards>
              );
            })}
        </div>
      </Container>
      <Basket>
        <h1>Total Quantity:{total}</h1>
        <h1>Total Amount :{totalSum}</h1>
      </Basket>
    </div>
  );
};

export default Cart;
