import React, {useState} from 'react';



const Display = (props) => {
    const {todoList, setTodoList}= props;

    const listCompleted = (todo) => {
        todo.checkedDelete = !todo.checkedDelete;
        setTodoList([...todoList]);
    };

    const crossStyled = (checkedDelete) => {
        if (checkedDelete === true) {
            return "completed";
        } else {
            return "notCompleted";
        }
    };
    const deleteButton = (idDeleted) => {
        setTodoList(
            todoList.filter((todo, index) => {
                return todo.id !== idDeleted;
            })
        );
    };

    return (
        <div >
            {todoList.map((todo, index) => (
                <div  className={crossStyled(todo.checkedDelete)} key={todo.id} >
                    <p >{todo.listContent}</p> 
                    <input type="checkbox" onChange={() => listCompleted(todo)} />
                    <button  onClick={() => deleteButton(todo.id)}  class="buttonDelete" >Delete</button>{" "}
                </div>
        ))}
        </div>
    );
};


export default Display