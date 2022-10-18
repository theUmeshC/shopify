export const dataReducer = (state, action) => {
  const data1 = action.payload;
  switch (action.type) {
    case "Load-Data":
      return {
        productData: data1,
        filteredData: data1,
      };
    case "ADD_TO_CART":
      const existingDataItemIndex = state.productData.findIndex(
        (c) => c.id === data1.id
      );
      const existingItem = state.productData[existingDataItemIndex];
      let updatedItems;
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
        filteredData: updatedItems,
      };
    case "REMOVE_FROM_CART":
      const existingRemoveItemIndex = state.productData.findIndex(
        (c) => c.id === data1.id
      );
      const existingRemoveItem = state.productData[existingRemoveItemIndex];
      let updatedRemoveItems;
      const updatedItem = {
        ...existingRemoveItem,
        quantity: existingRemoveItem.quantity + 1,
      };
      updatedRemoveItems = [...state.productData];
      updatedRemoveItems[existingRemoveItemIndex] = updatedItem;
      return {
        productData: updatedRemoveItems,
        filteredData: updatedRemoveItems,
      };
    case "FILTER-DATA":
      let filteredItems = [];
      if (data1.length > 0) {
        data1.forEach((element) => {
          console.log(element);
          const filterItem = state.productData.filter((item) => {
            return (
              item.color.toLowerCase() === element.toLowerCase() ||
              item.type.toLowerCase() === element.toLowerCase() ||
              item.price.toString() === element ||
              item.gender.toLowerCase() === element.toLowerCase() 
            );
          });
          filteredItems.push(...filterItem);
        });
        return {
          productData: state.productData,
          filteredData: filteredItems,
        };
      } else {
        return {
          productData: state.productData,
          filteredData: state.productData,
        };
      }
    default:
      return state;
  }
};
