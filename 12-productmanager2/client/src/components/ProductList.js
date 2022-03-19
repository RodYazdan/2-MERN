import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ProductList = (props) => {

    const {product, setProduct} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
        console.log(res.data);
            setProduct(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
const deleteProduct = (idFromBelow)=>{
    axios.delete(`http://localhost:8000/api/product/${idFromBelow}`)
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        setProduct(product.filter(product => product._id !== idFromBelow));
    })
    .catch((err)=>console.log(err))
}

    return (
        <div>
            {
                product.map((product, index)=>{
                return (
                    <div key={product._id}>
                        <hr/>
                        <p>{product.title}</p> 
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <Link to={`/product/${product._id}`}> {product.title}'s Page! </Link>
                        <br/>
                        <Link to={"/product/edit/" + product._id}>Edit</Link>
                        <br/>
                        <button onClick={()=>deleteProduct(product._id)} >Delete</button>
                    </div> 
                )})
            }
        </div>
    )
}
export default ProductList;





