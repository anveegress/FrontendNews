import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
import App from './App';
import './index.css';
import store from './redux/store';

// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
