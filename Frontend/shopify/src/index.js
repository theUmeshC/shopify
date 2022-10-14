import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataContext from "./Context/Data/dataContext";
import Context from "./Context/CartContext/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContext>
      <Context>
        <App />
      </Context>
    </DataContext>
  </React.StrictMode>
);
