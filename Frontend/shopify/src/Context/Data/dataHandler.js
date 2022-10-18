export const dataLoad = (data) => {
    return {
      type: "Load-Data",
      payload: data,
    };
  };

  export const addQuantity = (product) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: product,
    };
  };

  export const searchData = (data) => {
    return {
      type: "SEARCH_DATA",
      payload: data,
    };
  };