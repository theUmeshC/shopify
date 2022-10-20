/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const productData = createContext();
const DataContext = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  return (
    <productData.Provider
      value={{
        productData: [productData, setProductData],
        filteredData: [filteredData, setFilteredData]
      }}>
      {children}
    </productData.Provider>
  );
};
export default DataContext;
export const DataState = () => {
  return useContext(productData);
};
