import { useState } from "react"
import {phonesData,laptopsData} from "./data";



const App = () => {


    const [product,setProduct] = useState(phonesData);


    return (
        <div>
            {/* <button onClick={()=>{setProduct(phonesData)}}>phone</button>
            <button onClick={()=>{setProduct(laptopsData)}}>laptops</button>
            <h1>{product.map(item=>(
                <div>{item.title}</div>
            ))}</h1> */}
            <button>-</button>
            <span>0</span>
            <button>+</button>

        </div>
    )
}

export default App