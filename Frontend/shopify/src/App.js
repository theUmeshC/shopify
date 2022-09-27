import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

function App() {
  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTimeout(() => {
        setData(response.data);
        setLoadingState(false);
      }, 2500);
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home loading={loadingState} data={data} />
    </div>
  );
}

export default App;
