import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import DisplayAll from "./components/DisplayAll"

function App() { 
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route  path="/" element={<DisplayAll/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
