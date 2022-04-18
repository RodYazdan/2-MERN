import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Error =(props)=>{


    return(
        <div>
            <div>
                <p>Could not find the stock. Would you like to add a new stock ?</p>
                <Link to={"/new"}>Create a Stock</Link>
            </div>
        </div>
    )
}

export default Error;