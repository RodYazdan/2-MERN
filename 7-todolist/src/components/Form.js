import React, {useState} from 'react';

const Form = (props) => {
    const {todoList, setTodoList}= props;
    const [todoText, setTodoText]= useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        setTodoList([...todoList,
            {
            listContent: todoText,
            checkedDelete:false,
            id: Math.floor(Math.random() * 1000000).toString(),
            },
        ]);
        setTodoText("");
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            <input
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                type="text"
            />
            <button class="buttonAdd">Add</button>
            </form>
        </div>
        );
    };
    
    export default Form;