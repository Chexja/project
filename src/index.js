import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navb from './Header';
import App from './App';
import Carrito from './Carrito'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode> 
    {/* ACA SEINDEXA */}
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Carrito' element={<Carrito />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
