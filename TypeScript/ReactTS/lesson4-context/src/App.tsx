import React, { useContext } from 'react'
import { ProductContext } from './context/ProductContext';

const App = () => {
  const [product] = useContext(ProductContext);
  return (
    <div>
      {product.map((i:any)=>(
        <p>{i.title}</p>
      ))}
    </div>
  )
}

export default App