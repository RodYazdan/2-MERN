import React, {useState} from 'react';
import Display from './components/Display';
import Form from './components/Form';
import './App.css';


function App() {
  const [todolist, setTodolist]=useState([]);

  return (
    <div className="App">
      <Form 
        todoList={todolist} 
        setTodoList={setTodolist}
      />
      <Display 
        todoList={todolist} 
        setTodoList={setTodolist}
      />
    </div>
  );
}

export default App;
