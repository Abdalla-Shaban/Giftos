import Card from "./Card";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
function LatestProducts() {
  const products = useContext(ProductsContext);
  return (
    <section className="latest-products mx-auto py-20">
      <h1 className="text-4xl uppercase font-bold text-center mb-5">
        Latest Products
      </h1>
      <div className="cards-container grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {products && products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default LatestProducts;
