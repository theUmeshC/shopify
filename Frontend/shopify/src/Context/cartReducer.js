export const cartReducer = (state, action) => {
  
  const product = action.payload;
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find((x) => x.id === product.id);
      if (exist) {
        return {
          cart: state.cart.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        const product = action.payload;
        return {
          cart: [
            ...state.cart,
            {
              ...product,
              qty: 1,
            },
          ],
        };
      }
    case "REMOVE_FROM_CART":
      const existingCartItemIndex = state.cart.findIndex(
        (c) => c.id === product.id
      );
      const existingItem = state.cart[existingCartItemIndex];
      let updatedItems;
      if (existingItem.qty === 1) {
        updatedItems = state.cart.filter(item => item.id !== product.id);
      } else {
        const updatedItem = {...existingItem, qty:existingItem.qty -1};
        updatedItems = [...state.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        cart: updatedItems,
      };
    default:
      return state;
  }
};
