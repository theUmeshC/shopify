/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { toast } from 'react-toastify';
import { CartState } from '../Context/CartContext/context';
import { baseURL } from '../Helper/httpSupplier';
import useAxios from '../Helper/useAxios';
import Dashboard from './DashBoard';
import SideBar from './SideBar';

const Home = (props) => {
  const baseUrl = baseURL;
  const [cartState, setCartState] = CartState();
  const { data, loadingState, cloneData } = useAxios(baseUrl);

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
      {data && <SideBar data={data} />}
      <Dashboard
        className=""
        loading={loadingState}
        onItemAddedTOCart={cartDataHandler}
        cloneData={cloneData}
        searchDisplay={props.searchDisplay}
      />
    </div>
  );
};

export default Home;
