import React, {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';


const AllPets = (props) => {

    const navigate=useNavigate();
    const [petList, setPetList] = useState([]);
    // const{id}= props;

    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then((res)=>{
            console.log(res.data);
            setPetList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
    const deleteHandler = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPetList(petList.filter(pet => pet._id !== idFromBelow));
        })
        .catch((err)=>{
            console.log(err);
        })
}

    return (
        <div>
            <header>
                <h1>We have quotes by:</h1>
                <Link to ={"/new"}> Add an Pet</Link>
                <table style={{margin:"auto", border:"1px solid black"}}>
                    <thead style={{backgroundColor:"lightgray",color:"white"}}>
                        <tr>
                            <th>Pet</th>
                            <th>Action Available:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            petList?
                            petList.map((pet,index)=>(
                                <tr key={index}>
                                    <td>{pet.petName} </td>
                                    <td>
                                        <button
                                            style={{ backgroundImage:"linear-gradient(red, yellow)",padding:"7px 13px",color:"white",
                                            fontWeight:"bold",margin:"5px", border:"none", borderRadius:"5px"}}
                                            onClick={()=>{navigate(`/edit/${pet._id}`)}}>
                                        Edit</button> 
                                        
                                        <button
                                            style={{ backgroundImage:"linear-gradient(green, blue)",padding:"7px 13px",color:"white",
                                            fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}
                                            onClick={()=>deleteHandler(pet._id)}>
                                        Delete</button>
                                    </td>
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
export default AllPets;