/* eslint-disable */
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import useAxios from './Helper/useAxios';
import baseURL from './Helper/httpSupplier';

function App() {
  const baseUrl = baseURL;
  const { data, loadingState } = useAxios(baseUrl);
  const [searchDisplay, setSearchDisplay] = useState(true);
  const changeSearchDisplay = (value:boolean) => {
    setSearchDisplay(value);
  };

  return (
    <Router>
      <div className="App">
        <Navbar searchDisplay={searchDisplay} />
        <Switch>
          <Route exact path="/">
            <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Home
              searchDisplay={changeSearchDisplay}
              loading={loadingState}
              data={data}
            />
          </Route>
          <Route path="/cart">
            <Cart searchDisplay={changeSearchDisplay} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
