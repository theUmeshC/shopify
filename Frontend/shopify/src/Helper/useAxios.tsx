import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../Store/productSlice';

const useAxios = (baseURL: string) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        const appData = response.data;
        if (appData) {
          setData(appData);
        }
        dispatch(loadData(appData));
        setLoadingState(false);
      }, 2500);
    });
  }, [baseURL]);
  return { data, loadingState };
};

export default useAxios;
