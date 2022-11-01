/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  border-radius: 2px;
  background: #f8f6f6;
  border: 1px solid #cfcfcf;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
    border-radius: 2px;
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
export const Cards = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 70px;
    object-fit: contain;
    border-radius: 50%;
  }
  .details {
    width: 90px;
  }
  .quantity {
    width: 60px;
  }
  .cart__icon {
    background-color: #ff5709;
    padding: 5px;
    border-radius: 50%;
    color: white;
    transition: 0.3s;
    box-sizing: border-box;
    font-size: 30px;
    margin-right: 20px;
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
export const Basket = styled.div`
  position: absolute;
  bottom: 0vh;
  display: flex;
  width: 100vw;
  z-index: 999;
  text-align: center;
  flex-direction: column;
  background-color: aliceblue;
  border-top: 1px solid #cfcfcf;
  padding: 5px 0;
  h1 {
    font-size: 1.07rem;
  }
`;
