/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import DataContext from './Context/DataContext/dataContext';
import store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContext>
        <Provider store={store}>
          <App />
        </Provider>
    </DataContext>
  </React.StrictMode>,
);
