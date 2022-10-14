export const dataReducer = (state, action) => {
  const data1 = action.payload;
  const existingDataItemIndex = state.productData.findIndex(
    (c) => c.id === data1.id
  );
  const existingItem = state.productData[existingDataItemIndex];
  let updatedItems;
  switch (action.type) {
    case "Load-Data":
      return {
        productData: data1,
      };
    case "ADD_TO_CART":
      if (existingItem.quantity >= 1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.productData];
        updatedItems[existingDataItemIndex] = updatedItem;
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: 0,
        };
        updatedItems = [...state.productData];
        updatedItems[existingDataItemIndex] = updatedItem;
      }
      return {
        productData: updatedItems,
      };
    case 'REMOVE_FROM_CART':
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems = [...state.productData];
      updatedItems[existingDataItemIndex] = updatedItem;
      return {
        productData: updatedItems,
      };
    default:
      return state;
  }
};
