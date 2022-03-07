import React from "react";
import {useParams} from "react-router-dom";

const WordColor = (props) => {
    const {varType,textColor,backgroundColor} =useParams();
    
    return (
    <div>
        {
            isNaN(varType)?
            <h1 style= {{color:textColor, backgroundColor:backgroundColor}}> The word is {varType} </h1>:
            <h1> The number is {varType} </h1>
        }
    </div> 
    );
}

export default WordColor 