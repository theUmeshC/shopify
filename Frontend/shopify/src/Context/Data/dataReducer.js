export const dataReducer = (state, action) => {
  const data1 = action.payload;
  switch (action.type) {
    case "Load-Data":
      return {
        productData: data1,
      };
    case "ADD_TO_CART":
      const existingCartItemIndex = state.productData.findIndex(
        (c) => c.id === data1.id
      );
      const existingItem = state.productData[existingCartItemIndex];
      let updatedItems;
      if (existingItem.quantity >= 1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.productData];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: 0,
        };
        updatedItems = [...state.productData];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        productData: updatedItems,
      };
    default:
      return state;
  }
};
