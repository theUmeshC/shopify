import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 84%;
  margin: auto;
  align-items: center;
  justify-content: center;
  .card1 {
    margin: 30px;
    width: 200px;
    height: 254px;
    padding: 0.8em;
    background: #f5f5f5;
    position: relative;
    overflow: visible;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .card-img {
    background-color: #5fa9f9;
    height: 55%;
    width: 100%;
    border-radius: 0.5rem;
    transition: 0.3s ease;
  }
  .text-title {
    font-weight: 500;
    font-size: 1.1em;
    line-height: 1.5;
  }
  .text-details {
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;
    margin-bottom: 0.5em;
  }
  .card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }
  .grid__wrapper {
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  .cart__icon {
    background-color: #8D72E1;
    padding: 5px;
    border-radius: 50%;
    color: white;
    transition: 0.3s;
    box-sizing: border-box;
    font-size: 30px;
  }
  .cart__icon:hover {
    background-color: #6C4AB6;
    scale: 1.2;
  }
  .cart__icon:active {
    background-color: white;
    color: #6C4AB6;
    border: 1px solid #6C4AB6;
  }
`;

export default HomeContainer;
