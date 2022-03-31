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
    
    return (
        <div>
            <header>
                <div class="toprow">
                    <h1 style={{padding:"1px 20px"}} >Pet Shelter</h1>
                    <Link style={{padding:"1px 30px"}} to={"/new"}>Add a pet to the shelter</Link>
                </div>
                <h2 style={{padding:"0px 20px"}} >These pets are looking for a good home</h2>
            </header>

            {/* <Link to ={"/new"}> Add a pet to the shelter</Link> */}
            <header >

                <table  style={{margin:"25px 50px 75px 20px", border:"1px solid black"}}>
                    <thead style={{backgroundColor:"lightgrey",color:"black"}}>
                        <tr>
                            <th >Name </th>
                            <th >Type</th>
                            <th style={{margin:"25px 50px 75px 100px"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            petList?
                            petList.map((pet,index)=>(
                                <tr key={index}>
                                    <td>
                                        {pet.petName}
                                    </td>
                                    <td>
                                        {pet.petType}
                                    </td>
                                        <Link to={`/detail/${pet._id}`}>details {"|"}   </Link>
                                        
                                        <Link to={`/edit/${pet._id}`}>edit</Link>
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