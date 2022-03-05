import React,  {useState,useEffect} from 'react'
import axios from "axios";

const DisplayAll = (props) => {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0')
            .then(response=>{
                console.log(response)
                console.log(response.data)
                setPokemonList(response.data.results)
            })
    }, []);  // This empty array forces useEffect to render ONLY when the component first renders

    return (
    <div>
        <ul>
        {
            pokemonList.map( (item, index) => 
                <li key={ index }>{ item.name }   </li>
            )
        }
        </ul>
    </div>
    )
}

export default DisplayAll