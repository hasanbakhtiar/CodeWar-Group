import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface propType {
  children: any
}

export const ProductContext = createContext<any>(null);

export const ProductProvider = (props: propType) => {
  const [product, setProduct] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res: any) => setProduct(res.data));
  });
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};