/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const productDataContext = createContext();
const DataContext = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  return (
    <productDataContext.Provider
      value={{
        productDataKey: [productData, setProductData],
        filteredDataKey: [filteredData, setFilteredData]
      }}>
      {children}
    </productDataContext.Provider>
  );
};
export default DataContext;
export const DataState = () => {
  return useContext(productDataContext);
};
