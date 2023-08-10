import { createContext } from "react";
import data from "../data/db.json"
export const ProductsContext = createContext({});
function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider value={data.products}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
