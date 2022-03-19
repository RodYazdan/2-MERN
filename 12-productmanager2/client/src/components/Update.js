import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link,useParams,useNavigate} from "react-router-dom";

const Update = (props) => {
    
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams(); 
    console.log('!!!! coming from useParams', id)

    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res)=>{
                console.log('============getting product===============');
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [id])
    
    
    const updateProduct = (e)=>{
        e.preventDefault();
        const data = {
            title,
            price,
            description
        }
        console.log(id)
        axios.put(`http://localhost:8000/api/product/${id}`, data)
            .then((res) => {
                console.log(res);
                console.log(res.data); 
                console.log('=====navigating page=====')
                navigate("/");
            })
            .catch((err)=>console.log(err))
    }
    return (
        <div>
            <header>
                <h1>Update a Product</h1>
                <Link to={"/"}>Return Home</Link>
            </header>
            <form onSubmit={e => updateProduct(e)}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    // name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    // name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    // name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;