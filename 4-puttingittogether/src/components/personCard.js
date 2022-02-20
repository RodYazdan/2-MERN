import React, { useState } from 'react';


const PersonCard = (props) => {
    
    const [ getAge,setAge]= useState(props.age);
    const addAge=()=>setAge(getAge+1)  
    return (
        <div >
            <h1 > {props.lastName}, {props.firstName}</h1>
            <p>Age: {getAge} </p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={addAge}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default PersonCard;