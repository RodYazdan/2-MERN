import React, {useEffect, useState} from 'react';
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const DetailPet = (props) => {

    const navigate=useNavigate();
    // const [errors, setErrors] = useState({});
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkillOne, setPetSkillOne] = useState();
    const [petSkillTwo, setPetSkillTwo] = useState();
    const [petSkillThree, setPetSkillThree] = useState();
    const [petList, setPetList] = useState([]);

    const { id } = useParams(); 
    console.log('!!!! coming from useParams', id)

    useEffect(()=>{
        console.log({id})
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            console.log(res.data);
            setPetName(res.data.petName);
            setPetType(res.data.petType);
            setPetDescription(res.data.petDescription);
            setPetSkillOne(res.data.petSkillOne);
            setPetSkillTwo(res.data.petSkillTwo);
            setPetSkillThree(res.data.petSkillThree);
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    },[id])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/`)
        .then((res)=>{
            setPetList(res.data);
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    },[id])

    const deleteHandler = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            console.log("000==========================");
            console.log(id);
            console.log(idFromBelow);
            console.log(petList);
            setPetList(petList.filter(pet => pet._id !== idFromBelow));
            console.log("1==========================");
            navigate('/');
        })
        .catch((err)=>{
            console.log("2==========================");
            console.log(err);
        })
    }

    return(   
        <div >
                
                <header>
                    <div class="toprow">
                        <h1 style={{padding:"5px 20px"}}>Pet Shelter</h1>
                        <Link style={{padding:"1px 30px"}} to={"/"}>Back to Home</Link>  
                    </div>
                    <div class="toprow">
                    <h3 style={{padding:"5px 20px"}}>Details about: {petName}</h3>
                    <button
                        style={{ backgroundImage:"linear-gradient(red, red)",padding:"7px 13px",color:"white",
                                fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}
                        onClick={()=>deleteHandler(id)}>
                        Adopt {petName} </button>

                    </div>
                </header>
                <table  style={{margin:"25px 50px 75px 20px", border:"1px solid black"}}>
                        
                            <tr>
                                <td>Pet Type:</td>
                                <td>{petType}</td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td>{petDescription}</td>
                            </tr>
                            <tr>
                                <td>Skills:</td>
                                <td>{petSkillOne}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{petSkillTwo}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{petSkillThree}</td>
                            </tr>
                                
                </table>

        </div>
    )
}

export default DetailPet;