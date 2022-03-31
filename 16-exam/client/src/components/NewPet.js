import React, {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';


const NewPet = (props) => {

    const navigate=useNavigate();
    const [errors, setErrors] = useState("");
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkillOne, setPetSkillOne] = useState();
    const [petSkillTwo, setPetSkillTwo] = useState();
    const [petSkillThree, setPetSkillThree] = useState();

    const newSubmitHandler =(e)=>{
            e.preventDefault();
            axios.post(`http://localhost:8000/api/pets`,
            {petName,petType,petDescription,petSkillOne,petSkillTwo,petSkillThree} //this is a shorthand syntax for petName:petName
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
                    <h1 style={{padding:"1px 20px"}} >Pet Shelter</h1>
                    <Link style={{padding:"1px 30px"}} to={"/"}>Back to home</Link>
                </div>
                <h2 style={{padding:"0px 20px"}} >Know a pet needing a home?</h2>
            </header>
            <div class="split">
                <leftcol>
                    <div>
                        <label>Pet Name:</label>
                        <br/>
                        <input onChange={(e)=> setPetName(e.target.value)}
                        type="text"
                        name="petName"
                        value={petName}/>
                        {errors.petName ? <span>{errors.petName.message}</span> : null}
                    </div>
                    <div>
                        <br/>
                        <label>Pet Type:</label>
                        <br/>
                        <input onChange={(e)=> setPetType(e.target.value)}
                        type="text"
                        name="petType"
                        value={petType}/>
                        {errors.petType ? <span>{errors.petType.message}</span> : null}
                    </div>
                    <div>
                        <br/>
                        <label>Pet Description:</label>
                        <br/>
                        <input onChange={(e)=> setPetDescription(e.target.value)}
                        type="text"
                        name="petDescription"
                        value={petDescription}/>
                        {errors.petDescription ? <span>{errors.petDescription.message}</span> : null}
                    </div>
                    <br/>
                    <div>
                        <button
                            style={{ backgroundImage:"linear-gradient(blue, blue)",padding:"7px 13px",color:"white",
                            fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}
                        >Add Pet</button>
                    </div>
                </leftcol>
                <rightcol>
                    <label>Skills(optional):</label>
                    <br/>
                    <br/>
                    
                    <div>
                        <label>Skill 1:</label>
                        <br/>
                        <input onChange={(e)=> setPetSkillOne(e.target.value)}
                        type="text"
                        name="petSkillOne"
                        value={petSkillOne}/>
                        {errors.petSkillOne ? <span>{errors.petSkillOne.message}</span> : null}
                    </div>
                    <div>
                        <br/>
                        <label>Skill 2:</label>
                        <br/>
                        <input onChange={(e)=> setPetSkillTwo(e.target.value)}
                        type="text"
                        name="petSkillTwo"
                        value={petSkillTwo}/>
                        {errors.petSkillTwo ? <span>{errors.petSkillTwo.message}</span> : null}
                    </div>
                    <div>
                        <br/>
                        <label>Skill 3:</label>
                        <br/>
                        <input onChange={(e)=> setPetSkillThree(e.target.value)}
                        type="text"
                        name="petSkillThree"
                        value={petSkillThree}/>
                        {errors.petSkillThree ? <span>{errors.petSkillThree.message}</span> : null}
                    </div>
                </rightcol>
            </div>
                    <br></br>

                
            </form>
        </div>
    )
}

export default NewPet;