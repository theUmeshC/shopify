/* eslint-disable prettier/prettier */
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';


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

DataContext.propTypes = {
  children: PropTypes.element.isRequired
};

export default DataContext;

export const DataState = () => {
  return useContext(productDataContext);
};
