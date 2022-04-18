import React, {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';


const AllStocks = (props) => {

    const navigate=useNavigate();
    const [stockList, setStockList] = useState([]);

    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/stock")
        .then((res)=>{
            console.log(res.data);
            setStockList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteHandler = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/stock/${idFromBelow}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setStockList(stockList.filter(stock => stock._id !== idFromBelow));
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return (
        <div class="container ">
            <header>
                <div class="toprow">
                    <h1 style={{padding:"1px 20px", margin:"20px"}} >STOCK PORTFOLIO</h1>
                    {/* <Link style={{padding:"1px 30px "}} to={"/new"}>Add a Stock </Link> */}
                    <button
                                            style={{ backgroundImage:"linear-gradient(dimgray, gray)",padding:"7px 43px",color:"white",
                                            fontWeight:"bold",margin:"50px", border:"none", borderRadius:"5px"}}
                                            onClick={()=>{navigate(`/new`)}}>
                                        Add a Stock </button> 

                </div>
            </header>

            {/* <Link to ={"/new"}> Add a stock to the potfolio</Link> */}
            <header >

                <table  class="table table-bordered table-sm border border-dark">
                    <thead style={{backgroundColor:"lightgrey",color:"black"}}>
                        <tr>
                            <th >Stock Symbol </th>
                            <th >Quantity</th>
                            <th >Cost Per Share</th>
                            <th >Cost Basis</th>
                            <th style={{margin:"25px 50px 75px 100px"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            stockList?
                            stockList.map((stock,index)=>(
                                <tr key={index}>
                                    <td>
                                    <Link style={{padding:"1px 30px "}} to={`/detail/${stock._id}`}> {stock.stockSymbol} </Link> 
                                    </td>
                                    <td>
                                        {stock.stockQuantity}
                                    </td>
                                    <td>
                                        $ {stock.stockPriceBought}
                                    </td>
                                    <td >
                                        $ {Number (stock.stockPriceBought * stock.stockQuantity)}
                                    </td>
                                        {/* <Link to={`/edit/${stock._id}`}>Edit {"|"}   </Link>
                                        
                                        <Link to={`/delete/${stock._id}`}>Delete</Link> */}
                                        
                                        <button
                                            style={{ backgroundImage:"linear-gradient(Blue, DodgerBlue)",padding:"7px 13px",color:"white",
                                            fontWeight:"bold",margin:"5px", border:"none", borderRadius:"5px"}}
                                            onClick={()=>{navigate(`/edit/${stock._id}`)}}>
                                        Edit</button> 
                                        <button
                                            style={{ backgroundImage:"linear-gradient(FireBrick, purple)",padding:"7px 13px",color:"white",
                                            fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}
                                            onClick={()=>deleteHandler(stock._id)}>
                                        Delete</button>
                                </tr> 
                            ))
                            :null
                        }
                    </tbody>
                </table>
            </header>
            
        </div>
    )
}
export default AllStocks;