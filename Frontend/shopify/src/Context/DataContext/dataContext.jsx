/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React, { Component, createContext } from 'react';

export const productDataContext = createContext();

export default class DataContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      filteredData: [],
    };
  }

  setData = (value) => {
    this.setState({
      productData: value,
      filteredData: value,
    });
  };

  updateFilteredData = (value) => {
    this.setState({
      filteredData: value,
    });
  };

  render() {
    return (
      <productDataContext.Provider
        value={{
          dataState: this.state,
          updateState: this.setData,
          updateFilteredData: this.updateFilteredData,
        }}
      >
        {this.props.children}
      </productDataContext.Provider>
    );
  }
}
