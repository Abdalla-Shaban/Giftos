import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({});
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
