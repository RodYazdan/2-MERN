import './App.css';

import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail'
// import ProductForm from './components/ProductForm';
// import ProductList from './components/ProductList';

const App = () => {

  return(
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<Main/>} path="/" />
              <Route element={<Detail/>} path="/product/:id" />
          </Routes>
      </BrowserRouter>
    </div>
    );
}
export default App;
