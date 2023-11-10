import { useState } from "react"


interface phoneType {
    id:number;
    title:string;
}


const App:React.FC = () => {
    const [data,setData] = useState<phoneType[]>([
        {
            id:1,
            title:"Samsung"
        },
        {
            id:2,
            title:"Nokia"
        }
    ])
  return (
    <div>{data.map((i:any,c:number)=>(
            <li>{i.title}</li>
    ))}
    <button >change</button>
    </div>
  )
}

export default App