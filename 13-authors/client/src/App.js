import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
import Error from './components/Error';

const App = () => {

  return(
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<AllAuthors/>} path="/" />
              <Route element={<NewAuthor/>} path="/new" />
              <Route element={<Error/>} path="/error" />
              <Route element={<EditAuthor/>} path="/edit/:id"/>
          </Routes>
      </BrowserRouter>
    </div>
    );
}
export default App;