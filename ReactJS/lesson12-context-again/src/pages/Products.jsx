import { useContext } from "react"
import { DataContext } from "../context/DataContext"


const Products = () => {
  const [data] = useContext(DataContext);
  return (
    <>
      <h1>Products</h1>
      {console.log(data)}
    </>
  )
}

export default Products