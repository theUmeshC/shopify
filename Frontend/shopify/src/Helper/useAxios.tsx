/* eslint-disable */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../Store/productSlice';
import { Url } from './httpSupplier';

export interface dataInterface {
  color: string;
  currency : string;
  gender : string;
  id : number;
  imageURL : string;
  name: string;
  price : number;
  quantity : number;
  type : string;
}[];

const useAxios = (baseURL:Url) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<dataInterface | undefined>();
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        const apiData:dataInterface = response.data;
        setData(apiData);
        dispatch(loadData(apiData));
        setLoadingState(false);
      }, 2500);
    });
  }, [baseURL]);
  return { data, loadingState };
};

export default useAxios;
