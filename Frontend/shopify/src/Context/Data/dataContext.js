import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "./dataReducer";

const productData = createContext();

const DataContext = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, {
    productData: [],
  })
  return <productData.Provider value={{dataState,dispatchData}}>
      {children}
    </productData.Provider>
};

export default DataContext;

export const DataState = () => {
  return useContext(productData);
};
