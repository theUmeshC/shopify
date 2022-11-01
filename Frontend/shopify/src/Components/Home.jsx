/* eslint-disable prettier/prettier */
import React from 'react';
import { toast } from 'react-toastify';
import { CartState } from '../Context/CartContext/context';
import Dashboard from './DashBoard';
import SideBar from './SideBar';
import PropTypes from 'prop-types';


const Home = (props) => {
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
      {props.data && <SideBar data={props.data} />}
      <Dashboard
        className=""
        loading={props.loading}
        onItemAddedTOCart={cartDataHandler}
        searchDisplay={props.searchDisplay}
      />
    </div>
  );
};

Home.propTypes = {
  searchDisplay : PropTypes.func,
  loading : PropTypes.bool,
  data : PropTypes.array,
}

export default Home;
