import { createContext, useState } from "react";
const produtcdata = [
    {
      id:1,
      title:"Samsung",
      price:2000
    },
    {
      id:2,
      title:"Xiaomi",
      price:3000
    },
    {
      id:3,
      title:"Iphone",
      price:5000
    }
  ]

export const DataContext = createContext();


export const DataProvider = props=>{

    const [data,setData] = useState(produtcdata);
    
    return <DataContext.Provider value={[data,setData]}>
        {props.children}
    </DataContext.Provider>
}