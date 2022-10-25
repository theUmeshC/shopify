/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import React, { Component } from 'react';

export const productDataContext = createContext();
// const DataContext = ({ children }) => {
//   const [productData, setProductData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   return (
//     <productDataContext.Provider
//       value={{
//         productDataKey: [productData, setProductData],
//         filteredDataKey: [filteredData, setFilteredData]
//       }}>
//       {children}
//     </productDataContext.Provider>
//   );
// };

export default class DataContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      filteredData: []
    };
  }

  setData = (value) => {
    this.setState({
      productData: value,
      filteredData: value
    });
  };

  updateFilteredData = (value) => {
    this.setState({
      filteredData: value
    });
  }

  render() {
    return (
      <productDataContext.Provider value={{ dataState: this.state, updateState: this.setData, updateFilteredData : this.updateFilteredData }}>
        {this.props.children}
      </productDataContext.Provider>
    );
  }
}

// export default DataContext;
export const DataState = () => {
  return useContext(productDataContext);
};
