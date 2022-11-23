/* eslint-disable */
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './Store/store';
import react from 'react';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('failed to find root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
