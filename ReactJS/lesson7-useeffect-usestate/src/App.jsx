import { useEffect, useState } from "react"
import { phonesData, laptopsData } from "./data";
import axios from "axios";



const App = () => {

    const [info,setInfo] = useState([]);
    const [photo,setPhoto] = useState("");

    useEffect(()=>{
       axios.get('https://rickandmortyapi.com/api/character')
       .then(res=>setInfo(res.data.results))
    },[])
    return (
        <div>
            <img width={150} src={photo} alt="" />
           <ol>
            {info.map(item=>(
              <li key={item.id}>
                  <button onClick={()=>{setPhoto(item.image)}}>{item.name}</button>
              </li>
            ))}
           </ol>

        </div>
    )
}

export default App