import React from 'react';
import Form from './Form';

const Displayinfo = (props) => {
    return (
        
        <div>
            <h1>user info</h1> 
            <p>First Name : {props.firstname}</p>
            <p>Last Name : {props.lastname}</p>
            <p>Email : {props.email}</p>
            <p>Password : {props.password}</p>
            <p>Confirm Password : {props.confirmpass}</p>
        </div>
    )
}

export default Displayinfo