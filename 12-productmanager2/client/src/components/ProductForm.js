import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const {product, setProduct} = props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/product', {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setProduct([...product, res.data]); //this is new
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <header>
                <h1>Product Manager</h1>
            </header>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input className="submit-input" type="submit" value="Create" />
            </form>
        </div>
    )
}
export default ProductForm;

