import React from "react";
import { toast } from "react-toastify";
import { addCart } from "../Context/CartContext/cartHandler";
import { CartState } from "../Context/CartContext/context";
import { baseURL } from "../Helper/httpSupplier";
import useAxios from "../Helper/useAxios";
import Dashboard from "./DashBoard";
import SideBar from "./SideBar";

const Home = (props) => {
  const baseUrl = baseURL;
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { data, loadingState, cloneData } = useAxios(baseUrl);

  const cartDataHandler = (product) => {
    let selectedItemQuantity = product.quantity;
    if (cart.length > 0) {
      if (selectedItemQuantity > 0) {
        dispatch(addCart(product));
      } else {
        toast.error("🦄 Out of Stock!");
      }
    } else {
      dispatch(addCart(product));
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
