import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Error =(props)=>{


    return(
        <div>
            <div>
                <p>Could not find the pet. Would you like to add a new pet ?</p>
                <Link to={"/new"}>Create a Pet</Link>
            </div>
        </div>
    )
}

export default Error;