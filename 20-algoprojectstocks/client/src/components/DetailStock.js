import React, {useEffect, useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const DetailStock = (props) => {
    console.log('++++++++++++++++++++++++++++++++++');
    const navigate=useNavigate();
    // const [errors, setErrors] = useState({});
    const [stockSymbol, setStockSymbol] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");
    const [stockPriceCurrent, setStockPriceCurrent] = useState("");
    const [stockPriceBought, setStockPriceBought] = useState("");
    const [stockNews, setStockNews] = useState("");
    const [stockNewsTitle, setStockNewsTitle] = useState("");
    // const [loaded,setloaded]= useState(false);

    const { id } = useParams(); 
    console.log('!!!! coming from useParams', id)

    useEffect(()=>{
        //This is the information we have in our database . We need to populate the page with this and then do to the API to get the rest of the information 
        
        console.log('!@@@@@@@****************************');
        console.log({id})
        axios.get(`http://localhost:8000/api/stock/${id}`)
        .then((res)=>{
            console.log('000000****************************');
            console.log(res.data);
            console.log(res.data.stockSymbol);
            console.log(res.data.stockQuantity);
            console.log(res.data.stockPriceBought);
            console.log('000000****************************');
            setStockSymbol(res.data.stockSymbol);
            setStockQuantity(res.data.stockQuantity);
            setStockPriceBought(res.data.stockPriceBought);
            // console.log('1111*****************************');
            // console.log(stockSymbol);
            // console.log(stockQuantity);
            // console.log(stockPriceBought);
            // console.log('1111*****************************');
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    },[id])
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log(stockSymbol);

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            interval: '5min',
            function: 'TIME_SERIES_INTRADAY',
            symbol: 'MSFT',
            datatype: 'json',
            output_size: 'compact'
        },
        headers: {
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            'X-RapidAPI-Key': '00ab78176bmshfa390d40087bb68p1725aajsnf413a3a07713'
        }
    };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
            console.log('222222222*****************************');
            console.log(response.data.data.contents[0].content.summary);
            console.log('222222222*****************************');
            setStockNews(response.data.data.contents[0].content.summary);
            setStockNewsTitle(response.data.data.contents[0].content.title);
        }).catch(function (error) {
            console.error(error);
        });

    // },[id])



    useEffect(()=>{
        
        console.log('3333333333*****************************');
        console.log(stockSymbol);
        console.log('3333333333*****************************');

        // const options = {
        //     method: 'GET',
        //     url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-financials',
        //     params: {symbol:'AAPL', region: 'US'},
        //     headers: {
        //         'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        //         'X-RapidAPI-Key': '959818b70bmsh9e022a18148b7cep1b3afdjsncae1ed1478df'
        //     }
        // };

        const options = {
            method: 'GET',
            url: 'https://yh-finance.p.rapidapi.com/auto-complete',
            params: {q: 'AAPL', region: 'US'},
            headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': '00ab78176bmshfa390d40087bb68p1725aajsnf413a3a07713'
            }
        };

            console.log(options.params.symbol)
            axios.request(options).then(function (response) {
            console.log(response.data);

            console.log('4444444444444444');
            // options.params.symbol='SKJHSKJHS';
            // console.log(stockSymbol);
            // console.log(options.params.symbol);
            // console.log('444444444444444');
            console.log(response.data.price.regularMarketPrice.fmt);
            setStockPriceCurrent(response.data.price.regularMarketPrice.fmt);
            console.log('4444444444444444');
        }).catch(function (error) {
            console.error(error);
        });
    },[id])

    return(   
        <div class="container ">
                
                <header>
                    <div class="toprow">
                        <h1 style={{padding:"5px 20px"}}>Stock Information Page</h1>
                        <button
                                            style={{ backgroundImage:"linear-gradient(dimgray, gray)",padding:"7px 43px",color:"white",
                                            fontWeight:"bold",margin:"50px", border:"none", borderRadius:"5px"}}
                                            onClick={()=>{navigate(`/`)}}>
                                            Back to Portfolio 
                        </button> 

                    </div>
                    <div class="toprow">
                    <h3 style={{padding:"5px 20px"}}>Stock : {stockSymbol}</h3>
                    </div>
                </header>
                <table  class="table table-bordered table-sm border border-dark">
                    <thead style={{backgroundColor:"lightgrey",color:"black"}}>
                        <tr>
                            <th >Stock Parameter </th>
                            <th >Values </th>
                        </tr>
                    </thead>
                    <tbody >
                        
                            <tr>
                                <td>Stock Quantity:</td>
                                <td>{stockQuantity} Shares</td>
                            </tr>
                            <tr class="text-primary">
                                <td>Delayed Current Price:</td>
                                <td>$ {stockPriceCurrent}</td>
                            </tr>
                            <tr>
                                <td>PriceBought:</td>
                                <td>$ {stockPriceBought}</td>
                            </tr>
                            <tr>
                                <td>Cost Basis:</td>
                                <td >
                                        $ {Number (stockPriceBought * stockQuantity)}
                                </td>
                            </tr>
                            <tr class="text-primary">
                                <td>Current Value:</td>
                                <td >
                                        $ {Number (stockPriceCurrent * stockQuantity)}
                                </td>
                            </tr>
                            <tr class="text-primary">
                                <td>Profit:</td>
                                <td >
                                        $ {Number ((stockPriceCurrent-stockPriceBought) * stockQuantity)}
                                </td>
                            </tr>
                            <tr class="text-primary">
                                <td>News Title:</td>
                                <td >
                                    {stockNewsTitle}
                                </td>
                            </tr>
                            <tr class="text-primary">
                                <td >News:</td>
                                <td >
                                    {stockNews}
                                </td>
                            </tr>
                    </tbody>           
                </table>

        </div>
    )
}

export default DetailStock;