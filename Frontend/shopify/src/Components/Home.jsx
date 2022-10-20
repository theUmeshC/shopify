/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { toast } from 'react-toastify';
import { CartState } from '../Context/CartContext/context';
import { DataState } from '../Context/DataContext/dataContext';
import Dashboard from './DashBoard';
import SideBar from './SideBar';

const Home = (props) => {
  const { filteredDataKey } = DataState();
  const [filteredData] = filteredDataKey;
  const [cartState, setCartState] = CartState();
  const cartDataHandler = (product) => {
    let selectedItemQuantity = product.quantity;
    if (cartState.length > 0) {
      if (selectedItemQuantity > 0) {
        const exist = cartState.find((x) => x.id === product.id);
        if (exist) {
          const cartData = cartState.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          );
          console.log(cartData);
          setCartState(cartData);
        } else {
          const cartData = [
            ...cartState,
            {
              ...product,
              qty: 1
            }
          ];
          setCartState(cartData);
        }
      } else {
        toast.error('🦄 Out of Stock!');
      }
    } else {
      const cartData = {
        ...product,
        qty: 1
      };
      setCartState([cartData]);
    }
  };
  return (
    <div className="wrapper">
      {filteredData && <SideBar data={filteredData} />}
      <Dashboard
        className=""
        loading={props.loading}
        onItemAddedTOCart={cartDataHandler}
        searchDisplay={props.searchDisplay}
      />
    </div>
  );
};

export default Home;
