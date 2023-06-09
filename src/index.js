import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Ex1 from './Ex1';
// import Sum from './sum';
import Ex2 from './Ex2';
import Ex3 from './EX.3/ComA';
import Application from './Ex.4/Application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>EX.1</h1>
    <br />
    <Ex1 />
    <br />
    <h1>EX.2</h1>
    <br />
    <Ex2 />
    <br />
    <h1>EX.3</h1>
    <Ex3 />
    <br />
    <h1>EX.4</h1>
    <br />
    <Application />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
