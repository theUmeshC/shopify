/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Context/CartContext/context';
import DataContext from './Context/DataContext/dataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContext>
      <Context>
        <App />
      </Context>
    </DataContext>
  </React.StrictMode>
);
