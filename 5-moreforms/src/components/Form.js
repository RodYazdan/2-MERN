import React from  'react';

const Form = (props) => {

    const {firstname,lastname,email,password, confirmpass, setFirstname, setLastname, setEmail, setPassword, setConfirmPass
    }=props
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // shorthand ES6 syntax for building an object
        const newUser = { firstname,lastname, email, password };
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                {
                    firstname.length > 0 && firstname.length <  2 ?
                    <p>First Name must be at least 2 character long</p>
                    :null
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
                {
                    lastname.length > 0 && lastname.length <  2 ?
                    <p>Last Name must be at least 2 character long</p>
                    :null
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                {
                    email.length > 0 && email.length <  5 ?
                    <p>Email must be at least 5 character long</p>
                    :null
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                {
                    password.length > 0 && password.length <  8 ?
                    <p>Password must be at least 8 character long</p>
                    :null
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmpass} onChange={ (e) => setConfirmPass(e.target.value) } />
                {
                    confirmpass.length > 0 && password != confirmpass ?
                    <p>Passwords must match</p>
                    :null
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default Form;