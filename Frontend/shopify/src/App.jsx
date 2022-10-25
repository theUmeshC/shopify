/* eslint-disable prettier/prettier */
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Cart from './Components/Cart';
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

  onItemRemoveFromCart (product) {
    console.log(this.context);
    const existingRemoveItemIndex = this.context.dataState.productData.findIndex((c) => c.id === product.id);
    const existingRemoveItem = this.context.dataState.productData[existingRemoveItemIndex];
    let updatedRemoveItems;
    const updatedItem = {
      ...existingRemoveItem,
      quantity: existingRemoveItem.quantity + 1
    };
    updatedRemoveItems = [...this.context.dataState.productData];
    updatedRemoveItems[existingRemoveItemIndex] = updatedItem;
    this.context.updateState(updatedRemoveItems);
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
              <Cart searchDisplay={this.changeSearchDisplay } removeFromCart = {this.onItemRemoveFromCart} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App() {
//   const baseUrl = baseURL;
//   const { data,loadingState } = useAxios(baseUrl);
//   const [searchDisplay, setSearchDisplay] = useState(true);
//   const changeSearchDisplay = (value) => {
//     setSearchDisplay(value);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar searchDisplay={searchDisplay} />
//         <Switch>
//           <Route exact path="/">
//             <ToastContainer
//               position="top-right"
//               autoClose={1500}
//               hideProgressBar={false}
//               newestOnTop={false}
//               closeOnClick
//               rtl={false}
//               pauseOnFocusLoss
//               draggable
//               pauseOnHover
//             />
//             <Home searchDisplay={changeSearchDisplay} loading= {loadingState} data = {data} />
//           </Route>
//           <Route path="/cart">
//             <Cart searchDisplay={changeSearchDisplay} />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
