/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import baseURL from './Helper/httpSupplier';
import Home from './Components/Home';
import { productDataContext } from './Context/DataContext/dataContext';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import { loadData } from './Store/productSlice';

class App extends Component {
  static contextType = productDataContext;

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      searchDisplay: true,
    };
  }

  componentDidMount() {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        this.setState({
          data: response.data,
          loading: false,
        });
        this.context.updateState(response.data);
        this.props.loadData(response.data);
      }, 2500);
    });
  }

  render() {
    // console.log(this.props.loadData);
    return (
      <Router>
        <div className="App">
          <Navbar searchDisplay={this.state.searchDisplay} />
          <Switch>
            <Route exact path="/">
              <ToastContainer
                position="top-right"
                autoClose={1000}
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
                    dataState={dataState}
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

const mapStateToProps = (state) => state.cartReducers;
const mapDispatchToProps = { loadData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
