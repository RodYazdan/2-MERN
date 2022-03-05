import React, {Usestate} from 'react'
import axios from "axios";

const Forms = (props) => {

    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('http://www.example.com')
            .then(response=>{setResponseData(response.data)})
    }, []);  // This empty array forces useEffect to render ONLY when the component first renders




    return (
    <div>Forms</div>
    )
}

export default Forms