import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/login.component';
import SignUp from './components/signup.component';

ReactDOM.render(
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<SignUp />} />
    </Routes>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
