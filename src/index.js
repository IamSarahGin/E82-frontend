import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './common/Header';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
//set base url 
//axios.defaults.baseURL='http://127.0.0.1:8000/api';
axios.defaults.baseURL='http://petcare.c1.is/api';
//get the token and save for authorization to be used by api user route
axios.defaults.headers.common['Authorization']='Bearer ' + localStorage.getItem('token');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
