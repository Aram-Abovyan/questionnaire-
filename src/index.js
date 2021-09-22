import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, } from "react-router-dom";
import {
  digitalAgency,
  binaryx,
  powercode,
  ease,
  foodex,
} from './data/questions';

localStorage.setItem('digital-agency', JSON.stringify(digitalAgency));
localStorage.setItem('binaryx', JSON.stringify(binaryx));
localStorage.setItem('powercode', JSON.stringify(powercode));
localStorage.setItem('ease', JSON.stringify(ease));
localStorage.setItem('foodex', JSON.stringify(foodex));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
