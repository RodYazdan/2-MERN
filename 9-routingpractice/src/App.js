import './App.css';
import React from "react";
import { BrowserRouter,Routes, Route,Link,useParams } from "react-router-dom";
import Home from './components/Home'
import WordColor from './components/WordColor'


    
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route exact path="/:varType" element={<WordColor />} />
        <Route exact path="/:varType/:textColor/:backgroundColor" element={<WordColor />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App
