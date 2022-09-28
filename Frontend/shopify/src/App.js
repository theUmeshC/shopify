import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const baseURL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

function App() {
  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [cartData, setCartData] = useState([]);
  let [count, setCount] = useState([]);
  // const [stockControl, setStockControl] = useState(true);
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        setData(response.data);
        let arr = [];
        response.data.map((value)=> {
         return arr.push({id:value.id, initialCount:0})
        })
        setCount(arr)
        // console.log(count);
        setLoadingState(false);
      }, 2500);
    });
  }, [count]);

  const cartDataHandler = (id) => {
    const countClone = [...count];
    console.log(countClone);
    const selectedItem = data.filter((item) => {
      return item.id === id;
    });
    let selectedItemQuantity = selectedItem[0].quantity;
    let initialCountElement = countClone.filter(value => value.id === id);
    let  updatingCount= initialCountElement[0].initialCount;

    // console.log(selectedItemQuantity);
    if (cartData.length > 0) {
      cartData.forEach((item) => {
        if (item.id === id) {
          updatingCount++
        }
      });
      if (selectedItemQuantity > updatingCount) {
        setCartData((prevData) => [...prevData, selectedItem[0]]);
      } else {
        toast('out of stock');
      }
    } else {
      setCartData(selectedItem);
    }
  };
  // const hello = () => {
  //   console.log(cartData);
  // }
  const updateData = (newData)=> {
    setData(newData);
  }
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ToastContainer/>
            <Home
              loading={loadingState}
              data={data}
              // stockControl={stockControl}
              onItemAddedTOCart={cartDataHandler}
              updateData={updateData}
            />
          </Route>
          <Route path="/cart">
            <Cart data={cartData} />
          </Route>
        </Switch>
        {/* <button onClick={hello} >hello</button> */}
      </div>
    </Router>
  );
}

export default App;
