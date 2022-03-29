import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Error =(props)=>{


    return(
        <div>
            <div>
                <p>Could not find the author. Would you like to add a new author ?</p>
                <Link to={"/new"}>Create an Author</Link>
            </div>
        </div>
    )
}

export default Error;