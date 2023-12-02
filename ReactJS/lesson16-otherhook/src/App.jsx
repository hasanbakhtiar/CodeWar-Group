import {useState,useEffect, useLayoutEffect} from 'react';


const App = () => {
   const [data,setData] = useState("hello")
    useLayoutEffect(()=>{ 
        // alert('hello')
        setData('bye')
    },[])
  return (
    <div>
        {data}
    </div>
  )
}

export default App