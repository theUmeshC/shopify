export const cartReducer = (state, action) => {
  const product = action.payload;
  
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find((x) => x.id === product.id);
      if (exist) {
        return {
            cart : state.cart.map((x) =>
              x.id === product.id ? { ...x, qty: x.qty + 1 } : x
            )
        }
        // state.cart.map((x) =>
        //   x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        // );
      } else {
        const product = action.payload;
        return {
        //     [
        //   ...state,
        //   {
        //     ...product,
        //     qty: 1,
        //   }
        // ]
        cart : [
            ...state.cart,
            {
                ...product,
                qty:1,
            }
        ]
    }
      }
    // case "REMOVE_FROM_CART":
    //   return {};
    default:
      return state;
  }
};
