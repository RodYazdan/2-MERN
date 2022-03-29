import React, {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';


const NewAuthor = (props) => {

    const navigate=useNavigate();
    const [errors, setErrors] = useState("");
    const [authorName, setAuthorName] = useState("");

    const newSubmitHandler =(e)=>{
            e.preventDefault();
            axios.post(`http://localhost:8000/api/authors`,
            {authorName} //this is a shorthand syntax for authorName:authorName
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
                    <h1>Favorite Authors</h1>
                    <Link to={"/"}>Home</Link>
                </header>
                <p> Add a new author:</p>
                <label>Name:</label>
                <div>
                    <input onChange={(e)=> setAuthorName(e.target.value)}
                    type="text"
                    name="authorName"
                    value={authorName}/>

                    {errors.authorName ? <span>{errors.authorName.message}</span> : null}
                </div>
                    <br></br>
                <div>
                    <button 
                        style={{ backgroundImage:"linear-gradient(blue, blue)",padding:"7px 13px",color:"white",
                        fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}
                    onClick={(e)=> navigate("/")}>Cancel</button>
                    <button
                        style={{ backgroundImage:"linear-gradient(blue, blue)",padding:"7px 13px",color:"white",
                        fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}}
                    >Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default NewAuthor;