import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./Context/context";
import DataContext from "./Context/Data/dataContext";

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
