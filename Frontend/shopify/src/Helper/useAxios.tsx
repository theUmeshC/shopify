import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../Store/productSlice';
import { dataType } from './types';

const useAxios: (baseURL: string) => { data: dataType, loadingState: boolean } = (baseURL: string) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<dataType>();
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        const appData = response.data;
        setData(appData);
        dispatch(loadData(appData));
        setLoadingState(false);
      }, 2500);
    }).catch(err => { return err });
  }, [baseURL]);
  return { data, loadingState };
};

export default useAxios;
