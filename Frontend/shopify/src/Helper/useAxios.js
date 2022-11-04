import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../Store/productSlice';

const useAxios = (baseURL) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        setData(response.data);
        dispatch(loadData(response.data));
        setLoadingState(false);
      }, 2500);
    });
  }, [baseURL]);
  return { data, loadingState };
};

export default useAxios;
