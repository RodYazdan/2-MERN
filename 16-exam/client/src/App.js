import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import Error from './components/Error';
import DetailPet from './components/DetailPet';

const App = () => {

  return(
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<AllPets/>} path="/" />
              <Route element={<NewPet/>} path="/new" />
              <Route element={<Error/>} path="/error" />
              <Route element={<EditPet/>} path="/edit/:id"/>
              <Route element={<DetailPet/>} path="/detail/:id"/>
          </Routes>
      </BrowserRouter>
    </div>
    );
}
export default App;
