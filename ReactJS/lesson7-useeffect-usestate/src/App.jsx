import { useEffect, useState } from "react"
import { phonesData, laptopsData } from "./data";
import axios from "axios";



const App = () => {

    const [info,setInfo] = useState([]);
    

    useEffect(()=>{
       axios.get('https://fakestoreapi.com/products')
       .then(res=>setInfo(res.data))
    },[])



    return (
        <div>
           <ol>
            {info.map(item=>(
                <li key={item.id}>{item.title}</li>
            ))}
           </ol>

        </div>
    )
}

export default App