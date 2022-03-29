import React, {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';


const NewPet = (props) => {

    const navigate=useNavigate();
    const [errors, setErrors] = useState("");
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkills, setPetSkills] = useState(0);

    const newSubmitHandler =(e)=>{
            e.preventDefault();
            axios.post(`http://localhost:8000/api/pets`,
            {petName}, //this is a shorthand syntax for petName:petName
            {petType},
            {petDescription},
            {petSkills}  
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
                    <h1>Favorite Pets</h1>
                    <Link to={"/"}>Home</Link>
                </header>
                <div>
                    <label>Name:</label>
                    <input onChange={(e)=> setPetName(e.target.value)}
                    type="text"
                    name="petName"
                    value={petName}/>
                    {errors.petName ? <span>{errors.petName.message}</span> : null}
                </div>
                <div>
                    <label>Type:</label>
                    <input onChange={(e)=> setPetType(e.target.value)}
                    type="text"
                    name="petType"
                    value={petType}/>
                    {errors.petType ? <span>{errors.petType.message}</span> : null}
                </div>
                <div>
                    <label>Description:</label>
                    <input onChange={(e)=> setPetDescription(e.target.value)}
                    type="text"
                    name="petDescription"
                    value={petDescription}/>
                    {errors.petDescription ? <span>{errors.petDescription.message}</span> : null}
                </div>
                <div>
                    <label>Skills:</label>
                    <input onChange={(e)=> setPetSkills(e.target.value)}
                    type="Number"
                    name="petSkills"
                    value={petSkills}/>
                    {errors.petSkills ? <span>{errors.petSkills.message}</span> : null}
                </div>
                <button>Submit</button>
                <button onClick={(e)=> navigate("/")}>Cancel</button>
            </form>
        </div>
    )
}

export default NewPet;