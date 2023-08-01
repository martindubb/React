import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello';
import MoreApps from './MoreApps';
import Counter from './Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <hr />
    <hr />
    <MoreApps /> 
    <hr />
    <hr />
    <Counter />
  </React.StrictMode>
);
