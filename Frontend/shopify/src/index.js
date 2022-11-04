/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import Context from './Context/CartContext/context';
import DataContext from './Context/DataContext/dataContext';
import store from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContext>
      <Context>
        <Provider store={store}>
          <App />
        </Provider>
      </Context>
    </DataContext>
  </React.StrictMode>,
);
