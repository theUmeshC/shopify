/* eslint-disable prettier/prettier */
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import { baseURL } from './Helper/httpSupplier';
import axios from 'axios';
import React, { Component } from 'react';
import { productDataContext } from './Context/DataContext/dataContext';
import Cart from './Components/Cart';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      searchDisplay: true
    };
  }

  static contextType = productDataContext;

  changeSearchDisplay = (value) => {
    this.setState({ searchDisplay: value });
  };

  componentDidMount() {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        this.setState({
          data: response.data,
          loading: false
        });
        this.context.updateState(response.data);
      }, 2500);
    });
  }

  onItemRemoveFromCart(product) {
    console.log(this.context);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar searchDisplay={this.state.searchDisplay} />
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
                searchDisplay={this.changeSearchDisplay}
                loading={this.state.loading}
                data={this.state.data}
              />
            </Route>
            <Route path="/cart">
              <productDataContext.Consumer>
                {(dataState) => (
                      <Cart
                        searchDisplay={this.changeSearchDisplay}
                        removeFromCart={this.onItemRemoveFromCart}
                        dataState = { dataState }
                      />
                )}
              </productDataContext.Consumer>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
