import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import './index.css';
import App from './App';
// import store from './redux/store';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
  // <BrowserRouter>
  //   <Provider>
  //     <App />
  //   </Provider>
  // </BrowserRouter>,
);
