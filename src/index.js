import React from 'react';
import ReactDOM from 'react-dom';
import "./components/styles/global.css"

import App from './App';
// import Navbar from './components/Navbar/Navbar'
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
  
    <App />
    
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
