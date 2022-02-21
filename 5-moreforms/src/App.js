import React, {useState} from  'react';
import './App.css';
import Displayinfo from './components/Displayinfo';
import Form from './components/Form';

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");  
  return (
    <div className="App">
      <Form 
      firstname = {firstname}
      lastname = {lastname}
      email= {email}
      password={password}
      confirmpass={confirmpass}
      setFirstname={setFirstname}
      setLastname={setLastname}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPass={setConfirmPass}
      />
      <Displayinfo 
      firstname = {firstname}
      lastname = {lastname}
      email= {email}
      password={password}
      confirmpass={confirmpass}
      setFirstname={setFirstname}
      setLastname={setLastname}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPass={setConfirmPass}
      />
    </div>
  );
}

export default App;
