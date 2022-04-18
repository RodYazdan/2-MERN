import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();
// Reach router creates a key:value pair inside of our props object 
//     for every variable found inside the "path" attribute. 
// For example, the "path" attribute of the Detail component (Code Block 3 - App.js).   
// We can deconstruct the id from props.
// The unique part of our "path" (:id) will have its value 
//    assigned in the Link element's "to" attribute (e.g. Code Block 4)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) )
    }, [id])

const deleteOneProduct = (id)=>{
    axios.delete(`http://localhost:8000/api/product/${id}`)
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        navigate("/");
    })
    .catch((err)=>console.log(err))
}


    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <br/>
            <button onClick={()=>deleteOneProduct(product._id)} >Delete</button>
        </div>
    )
}
export default Detail;
