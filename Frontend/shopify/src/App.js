import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";

const baseURL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

function App() {
  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        setData(response.data);
        setLoadingState(false);
      }, 2500);
    });
  }, []);
  const cartDataHandler = (id) => {
    const cartItem = data.filter((item) => {
      return item.id === id;
    });
    if(cartData.length >= 1){
      const quantity = cartItem[0].quantity;
      console.log(quantity);

    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home
              loading={loadingState}
              data={data}
              onItemAddedTOCart={cartDataHandler}
            />
          </Route>
          <Route path="/cart">
            <Cart data= {cartData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
