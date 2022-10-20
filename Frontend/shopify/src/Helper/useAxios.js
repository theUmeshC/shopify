/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DataState } from '../Context/DataContext/dataContext';

const useAxios = (baseURL) => {
  const { productDataKey, filteredDataKey } = DataState();
  const [, setProductData] = productDataKey;
  const [, setFilteredData] = filteredDataKey;
  const [data, setData] = useState();
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        setData(response.data);
        setProductData(response.data);
        setFilteredData(response.data);
        setLoadingState(false);
      }, 2500);
    });
  }, [baseURL, setFilteredData, setProductData]);
  return { data, loadingState };
};

export default useAxios;
