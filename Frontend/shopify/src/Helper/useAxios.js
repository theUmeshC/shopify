import axios from "axios";
import { useEffect, useState } from "react";
import { DataState } from "../Context/Data/dataContext";
import { dataLoad } from "../Context/Data/dataHandler";

const useAxios = (baseURL) => {
  const { dispatchData } = DataState();
  const [data, setData] = useState();
  const [loadingState, setLoadingState] = useState(true);
  const [cloneData, setCloneData] = useState([]);
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        setData(response.data);
        setCloneData(response.data);
        dispatchData(dataLoad(response.data));
        setLoadingState(false);
      }, 2500);
    });
  }, [baseURL, dispatchData]);
  return { data, loadingState, cloneData };
};

export default useAxios;
