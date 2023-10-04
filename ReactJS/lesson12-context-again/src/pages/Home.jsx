import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext";




const Home = () => {
  const [data] = useContext(DataContext);
  return (
    <>
      <h1>Home</h1>
      <ul>
        {data.map(i=>(<li key={i.id}>{i.title}</li>))}
      </ul>
    </>
  )
}

export default Home