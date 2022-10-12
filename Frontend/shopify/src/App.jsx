import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./Components/SideBar";
import { CartState } from "./Context/context";
import { addCart } from "./Context/cartHandler";

const baseURL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

function App() {
  const [data, setData] = useState();
  const [loadingState, setLoadingState] = useState(true);
  const [count, setCount] = useState([]);
  const [cloneData, setCloneData] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState(true);
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        setData(response.data);
        setCloneData(response.data);
        let arr = [];
        response.data.map((value) => {
          return arr.push({ id: value.id, initialCount: 0 });
        });
        setCount(arr);
        setLoadingState(false);
      }, 2500);
    });
  }, []);

  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);

  const cartDataHandler = (id, product) => {
    console.log(product);
    let selectedItemQuantity = product.quantity;
    let [initialCountElement] = count.filter((value) => value.id === id);
    let updatingCount = initialCountElement.initialCount;
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.id === id) {
          updatingCount = item.qty;
        }
      });
      if (selectedItemQuantity > updatingCount) {
        dispatch(addCart(product));
      } else {
        toast.error("🦄 Out of Stock!");
      }
    } else {
      dispatch(addCart(product));
    }
  };

  const updateData = (newData) => {
    const filterData = data.filter((value) => {
      return (
        value.color.toLowerCase() === newData.toLowerCase() ||
        value.type.toLowerCase() === newData.toLowerCase() ||
        value.price.toString() === newData.toLowerCase() ||
        value.gender.toLowerCase() === newData.toLowerCase()
      );
    });
    setCloneData(filterData);
  };
  const navSearchHandle = (input) => {
    if (input !== "") {
      updateData(input);
    }
    if (input === " ") {
      setCloneData(data);
    }
  };
  const onFilterChange = (filterData) => {
    console.log(filterData);
    updateData(filterData);
  };

  const changeSearchDisplay = (value) => {
    setSearchDisplay(value);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          updateData={updateData}
          searchInput={navSearchHandle}
          searchDisplay={searchDisplay}
        />
        <Switch>
          <Route exact path="/">
            <ToastContainer
              position="top-right"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ToastContainer />
            <div className="wrapper">
              {data && (
                <SideBar data={data} filterDataHandler={onFilterChange} />
              )}
              <Home
                className=""
                loading={loadingState}
                onItemAddedTOCart={cartDataHandler}
                updateData={updateData}
                cloneData={cloneData}
                searchDisplay={changeSearchDisplay}
              />
            </div>
          </Route>
          <Route path="/cart">
            <Cart countData={count} searchDisplay={changeSearchDisplay} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
