import React from 'react';


const personCard = (props) => {
    return (
        <div>
            <h1>asdasdioajsoidjas</h1>
            <h1> {props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.Brown}</p>
            <button onclick="addAge()"> Birthday Button for {props.firstname}{props.lastname}</button>
        </div>
    );
}
export default personCard;