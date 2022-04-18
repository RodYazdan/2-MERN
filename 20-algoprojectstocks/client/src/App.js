import './App.css';
import './bootstrap.min.css'

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllStocks from './components/AllStocks';
import NewStock from './components/NewStock';
import EditStock from './components/EditStock';
import Error from './components/Error';
import DetailStock from './components/DetailStock';

const App = () => {

  return(
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<AllStocks/>} path="/" />
              <Route element={<NewStock/>} path="/new" />
              <Route element={<Error/>} path="/error" />
              <Route element={<EditStock/>} path="/edit/:id"/>
              <Route element={<DetailStock/>} path="/detail/:id"/>
              <Route element={<DetailStock/>} path="/delete/:id"/>
          </Routes>
      </BrowserRouter>
    </div>
    );
}
export default App;
