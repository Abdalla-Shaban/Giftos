import { useContext } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const { product } = props;
  const { addProductToCart } = useContext(CartContext);
  const auth = useAuth();
  const navigate = useNavigate()
  return (
    <div className="card min-h-[245px] flex flex-col justify-center p-5 pb-2 relative bg-[#eeeeee]">
      <span className="flex justify-center items-center text-sm w-10 h-10 p-4 bg-white rounded-full">
        New
      </span>
      <img
        className="max-h-[145px] max-w-full mx-auto"
        src={product.image}
        alt={product.title}
      />
      <div className="info flex justify-between items-center mt-10 mb-5">
        <h4>{product.title}</h4>
        <p>
          price{" "}
          <span className="text-[#db4f66] font-bold">${product.price}</span>
        </p>
      </div>
      <button
        onClick={() => {
          if(auth.user.username) {
            addProductToCart(product)
          }else {
            navigate("/bag")
          }
        }}
        className="font-semibold py-3 mt-auto bg-[#f89cab] border-2 border-[#f89cab] hover:bg-transparent hover:text-[#f89cab] flex items-center justify-center gap-3 rounded"
      >
        Add to Bag <FaBagShopping className="inline-block" />
      </button>
    </div>
  );
}

export default Card;
