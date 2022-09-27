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
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        setData(response.data);
        setLoadingState(false);
      }, 2500);
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home loading={loadingState} data={data} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
