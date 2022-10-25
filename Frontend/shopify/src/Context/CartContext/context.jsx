/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext } from 'react';
import React, { Component } from 'react';

export const cart = createContext();

export default class Context extends Component {
  constructor(props) {
        super(props);
        this.state = {
          cartState: []
        }
      }
      setCartData = (value) => {
        this.setState({
          cartState:[...this.state.cartState,value],
        });
      }
      updateCartData = (value) => {
        this.setState({cartState:value});
      }
  render() {
    return (
      <cart.Provider value={{cartState:this.state.cartState, updateCart: this.setCartData, updateCartData : this.updateCartData}}>
        {this.props.children}
      </cart.Provider>
    )
  }
}



// const Context = ({ children }) => {
//   const [cartState, setCartState] = useState([]);
//   return <cart.Provider value={[cartState, setCartState]}>{children}</cart.Provider>;
// };

// export default Context;

// export const CartState = () => {
//   return useContext(cart);
// };
