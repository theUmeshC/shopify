/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
// import { CartState } from '../Context/CartContext/context';
import Dashboard from './DashBoard';
import SideBar from './SideBar';
import { cart } from '../Context/CartContext/context';
import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  static contextType = cart;

  cartDataHandler = (product) => {
    let selectedItemQuantity = product.quantity;
    if (this.context.cartState.length > 0) {
      if (selectedItemQuantity > 0) {
        const exist = this.context.cartState.find((x) => x.id === product.id);
        if (exist) {
          const cartData = this.context.cartState.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1, availQty : product.quantity -1 } : x , 
          );
          this.context.updateExistingCartData( cartData );
        } else {
          const cartData = [
            ...this.context.cartState,
            {
              ...product,
              qty: 1,
              availQty : product.quantity -1,
            }
          ];
          this.context.updateCart( cartData );
        }
      } else {
        toast.error('🦄 Out of Stock!');
      }
    } else {
      const cartData = {
        ...product,
        qty: 1,
        availQty : product.quantity -1
      };
      this.context.initialUpdate(cartData);
    }
  };
  render() {
    return (
      <div className="wrapper">
        {this.props.data && <SideBar data={this.props.data} />}
        <Dashboard
          className=""
          loading={this.props.loading}
          onItemAddedTOCart={this.cartDataHandler}
          searchDisplay={this.props.searchDisplay}
        />
      </div>
    );
  }
}



// const Home = (props) => {
//   const [cartState, setCartState] = CartState();
//   const cartDataHandler = (product) => {
//     let selectedItemQuantity = product.quantity;
//     if (cartState.length > 0) {
//       if (selectedItemQuantity > 0) {
//         const exist = cartState.find((x) => x.id === product.id);
//         if (exist) {
//           const cartData = cartState.map((x) =>
//             x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//           );
//           console.log(cartData);
//           setCartState(cartData);
//         } else {
//           const cartData = [
//             ...cartState,
//             {
//               ...product,
//               qty: 1
//             }
//           ];
//           setCartState(cartData);
//         }
//       } else {
//         toast.error('🦄 Out of Stock!');
//       }
//     } else {
//       const cartData = {
//         ...product,
//         qty: 1
//       };
//       setCartState([cartData]);
//     }
//   };
//   return (
//     <div className="wrapper">
//       {props.data && <SideBar data={props.data} />}
//       <Dashboard
//         className=""
//         loading={props.loading}
//         onItemAddedTOCart={cartDataHandler}
//         searchDisplay={props.searchDisplay}
//       />
//     </div>
//   );
// };

// export default Home;
