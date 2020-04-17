import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css'
import injectContext, { Context } from './store/app.Context';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


function App() {
  const { store } = useContext(apiContext)
  return (
    <>
      <BrowserRouter>
      <h1>Trabajo aca</h1>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
