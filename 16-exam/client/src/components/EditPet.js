import React, {useEffect, useState} from 'react';
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const EditPet = (props) => {

    const navigate=useNavigate();
    const [errors, setErrors] = useState({});
    const [petName, setPetName] = useState("");
    // const{id}=props;
    const { id } = useParams(); 
    console.log('!!!! coming from useParams', id)

    useEffect(()=>{
        console.log({id})
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            console.log(res.data);
            setPetName(res.data.petName);
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    },[id])


    const updateSubmitHandler =(e)=>{
            e.preventDefault();
            axios.put(`http://localhost:8000/api/pets/${id}`,
            {petName} //this is a shorthand syntax for petName:petName
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
            <form onSubmit={updateSubmitHandler}>
                <header>
                    <h1>Edit This Pet</h1>
                    <Link to={"/"}>Home</Link>
                </header>

                <label>Name:</label>

                <input onChange={(e)=> setPetName(e.target.value)}
                type="text"
                name="petName"
                value={petName}/>

                {errors.petName ? <span>{errors.petName.message}</span> : null}

                <button>Submit</button>
                <button onClick={(e)=> navigate("/")}>Cancel</button>
            </form>
        </div>
    )
}

export default EditPet;