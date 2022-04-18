import React, {useState} from 'react';
// import {Link,useNavigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const NewStock = (props) => {

    const navigate=useNavigate();
    const [errors, setErrors] = useState("");
    const [stockSymbol, setStockSymbol] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");
    const [stockPriceBought, setStockPriceBought] = useState("");


    const newSubmitHandler =(e)=>{
            e.preventDefault();
            axios.post(`http://localhost:8000/api/stock`,
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
        <div>
            <form onSubmit={newSubmitHandler}>
            <header>
                <div class="toprow">
                    <h1 style={{padding:"1px 20px"}} >BUY STOCK </h1>
                    {/* <Link style={{padding:"1px 30px"}} to={"/"}>Back to home</Link> */}
                    <button
                                            style={{ backgroundImage:"linear-gradient(dimgray, gray)",padding:"7px 43px",color:"white",
                                            fontWeight:"bold",margin:"50px", border:"none", borderRadius:"5px"}}
                                            onClick={()=>{navigate(`/`)}}>
                                        Back to Portfolio </button> 
                </div>

            </header>
            <div class="split">
                <leftcol>
                    <div>
                        <label>Stock Name:</label>
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
                        <input onChange={(e)=> setStockQuantity(e.target.value)}
                        type="number"
                        name="stockQuantity"
                        value={stockQuantity}/>
                        {errors.stockQuantity ? <span>{errors.stockQuantity.message}</span> : null}
                    </div>
                    <div>
                        <br/>
                        <label>Cost Per Share:</label>
                        <br/>
                        <input onChange={(e)=> setStockPriceBought(e.target.value)}
                        type="number"
                        name="stockPriceBought"
                        value={stockPriceBought}/>
                        {errors.stockPriceBought ? <span>{errors.stockPriceBought.message}</span> : null}
                    </div>
                    <br/>
                    <div>
                        <button
                            style={{ backgroundImage:"linear-gradient(blue, blue)",padding:"7px 13px",color:"white",
                            fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}
                        >Add Stock To Portfolio</button>
                    </div>
                </leftcol>
            </div>
                    <br></br>

                
            </form>
        </div>
    )
}

export default NewStock;