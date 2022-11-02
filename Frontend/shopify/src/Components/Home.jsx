/* eslint-disable max-len */
import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { CartState } from '../Context/CartContext/context';
import Dashboard from './DashBoard';
import SideBar from './SideBar';

function Home({ searchDisplay, loading, data }) {
  const [cartState, setCartState] = CartState();
  const cartDataHandler = (product) => {
    const selectedItemQuantity = product.quantity;
    if (cartState.length > 0) {
      if (selectedItemQuantity > 0) {
        const exist = cartState.find((x) => x.id === product.id);
        if (exist) {
          const cartData = cartState.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
          setCartState(cartData);
        } else {
          const cartData = [
            ...cartState,
            {
              ...product,
              qty: 1,
            },
          ];
          setCartState(cartData);
        }
      } else {
        toast.error('🦄 Out of Stock!');
      }
    } else {
      const cartData = {
        ...product,
        qty: 1,
      };
      setCartState([cartData]);
    }
  };
  return (
    <div className="wrapper">
      {data && <SideBar data={data} />}
      <Dashboard
        className=""
        loading={loading}
        onItemAddedTOCart={cartDataHandler}
        searchDisplay={searchDisplay}
      />
    </div>
  );
}

Home.propTypes = {
  searchDisplay: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Home;
