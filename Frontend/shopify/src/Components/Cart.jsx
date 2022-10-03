import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: auto;
  gap: 2px;
  height: 80vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  height: 90vh;
`;
const Cards = styled.div`
  height: 100px;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  gap: 10px;
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
  // const cartLoaclStorage = localStorage.getItem('cartData');

  const [cloneData, setCloneData] = useState([]);
  const total = data.length;
  const totalSum = data
    .map((value) => {
      return value.price;
    })
    .reduce((acc, a) => {
      return acc + a;
    }, 0);

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
      localStorage.setItem("cartData", JSON.stringify(cartArray));
    }
    console.log(localStorage.getItem("cartData"));
    setCloneData(JSON.parse(localStorage.getItem("cartData")));
  }, [data]);
  // const cartData = data.reduce((acc, curr) => {
  //   const str = JSON.stringify(curr);
  //   acc[str] = (acc[str] || 0) + 1;
  //   return acc;
  // }, []);
  // const buttonClick = () => {
  //   console.log(data);
  //   // console.log(cartData);
  //   console.log(map);
  //   console.log(Object.keys(map));
  //   let cartArray = [];

  //   for (let [key, value] of map){
  //     console.log(key);
  //     let element = JSON.parse(key);
  //     element.cartQuantity = value;
  //     console.log(element);
  //     cartArray.push(element);
  //     console.log(value);
  //     console.log(cartArray);
  //   }
  // }
  return (
    <Wrapper>
      <Container>
        {/* <button onClick={buttonClick}>hello</button> */}
        {cloneData &&
          cloneData.map((value, i) => {
            return (
              <Cards key={i}>
                <img src={value.imageURL} alt="" />
                <div className="details">
                  <h4>{value.name}</h4>
                  <h5>{value.price}</h5>
                  <h5>{value.cartQuantity}</h5>
                </div>
                {/* <button onClick={removeItem}>delete</button> */}
              </Cards>
            );
          })}
      </Container>
      <Basket>
        <h1>Total Quantity:{total}</h1>
        <h1>Total Amount :{totalSum}</h1>
      </Basket>
    </Wrapper>
  );
};

export default Cart;
