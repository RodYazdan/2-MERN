import React, {useEffect, useState} from 'react';
// import {Link,useParams,useNavigate} from 'react-router-dom';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const EditStock = (props) => {

    const navigate=useNavigate();
    const [errors, setErrors] = useState({});
    const [stockSymbol, setStockSymbol] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");
    const [stockPriceBought, setStockPriceBought] = useState("");
    const { id } = useParams(); 
    console.log('!!!! coming from useParams', id)

    useEffect(()=>{
        console.log({id})
        axios.get(`http://localhost:8000/api/stock/${id}`)
        .then((res)=>{
            console.log(res.data);
            setStockSymbol(res.data.stockSymbol);
            setStockQuantity(res.data.stockQuantity);
            setStockPriceBought(res.data.stockPriceBought);
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    },[id])


    const updateSubmitHandler =(e)=>{
            e.preventDefault();
            axios.put(`http://localhost:8000/api/stock/${id}`,
            {stockSymbol,stockQuantity,stockPriceBought} //this is a shorthand syntax for stockSymbol:stockSymbol
            )
            .then((res)=>{
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div class="container ">
            <form onSubmit={updateSubmitHandler}>
                <header>
                    <div class="toprow">
                        <h1 style={{padding:"1px 20px"}} >Stock Portfolio Update</h1>
                        {/* <Link style={{padding:"1px 30px"}} to={"/"}>Back to Home</Link> */}
                        <button
                                            style={{ backgroundImage:"linear-gradient(dimgray, gray)",padding:"7px 43px",color:"white",
                                            fontWeight:"bold",margin:"50px", border:"none", borderRadius:"5px"}}
                                            onClick={()=>{navigate(`/`)}}>
                                            Back to Portfolio 
                        </button> 
                    </div>
                    <h2 style={{padding:"0px 20px"}} >Edit {stockSymbol}</h2>
                </header>
                <div class="split">
                    <leftcol>
                        <div>
                            <label>Stock Symbol:</label>
                            <br/>
                            <input onChange={(e)=> setStockSymbol(e.target.value)}
                            type="text"
                            name="stockSymbol"
                            value={stockSymbol}/>
                            {errors.stockSymbol ? <span>{errors.stockSymbol.message}</span> : null}
                        </div>
                        <div>
                            <br/>
                            <label>Stock Quantity:</label>
                            <br/>
                            <input  onChange={(e)=> setStockQuantity(e.target.value)}
                            type="number"
                            name="stockQuantity"
                            value={stockQuantity}/>
                            {errors.stockQuantity ? <span>{errors.stockQuantity.message}</span> : null}
                        </div>
                        <div>
                            <br/>
                            <label>Cost Per Share ($):</label>
                            <br/>
                            <input onChange={(e)=> setStockPriceBought(e.target.value)}
                            type="number"
                            name="stockPriceBought"
                            value={stockPriceBought}/>
                            {errors.stockPriceBought ? <span>{errors.stockPriceBought.message}</span> : null}
                        </div>
                        <br/>
                        <button
                            style={{ backgroundImage:"linear-gradient(blue, blue)",padding:"7px 13px",color:"white",
                                    fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}
                            >Update</button>

                    </leftcol>
                </div>
            </form>
        </div>
    )
}

export default EditStock;