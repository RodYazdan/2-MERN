import React, {useEffect, useState} from 'react';
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const EditAuthor = (props) => {

    const navigate=useNavigate();
    const [errors, setErrors] = useState({});
    const [authorName, setAuthorName] = useState("");
    const { id } = useParams(); 
    console.log('!!!! coming from useParams', id)

    useEffect(()=>{
        console.log({id})
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data);
            setAuthorName(res.data.authorName);
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    },[id])


    const updateSubmitHandler =(e)=>{
            e.preventDefault();
            axios.put(`http://localhost:8000/api/authors/${id}`,
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
            <form onSubmit={updateSubmitHandler}>
                <header>
                    <h1>Favorite Authors</h1>
                    <Link to={"/"}>Home</Link>
                    <p>Edit This Author</p>
                </header>

                <label>Name:</label>

                <input onChange={(e)=> setAuthorName(e.target.value)}
                type="text"
                name="authorName"
                value={authorName}/>

                {errors.authorName ? <span>{errors.authorName.message}</span> : null}
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

export default EditAuthor;