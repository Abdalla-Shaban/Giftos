import { Link } from "react-router-dom";
import { useAuth } from "../components/Auth";
import CartItems from "../components/CartItems";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Bag() {
  const auth = useAuth();
  const { cartItems } = useContext(CartContext);
  return (
    <div className="py-20">
      {!auth.user ? (
        <div className="flex-1 text-3xl md:text-4xl text-center">
          Yon Need To Login First... <br />{" "}
          <Link
            className="block w-fit mx-auto underline font-bold text-[#f89cab] mt-2"
            to="/login"
          >
            Login
          </Link>
        </div>
      ) : (
        <>
          {cartItems.length === 0 && (
            <div className="flex-1 text-3xl md:text-4xl text-center">
              Your Bag Is Empty Get Your Own Products From Here... <br />{" "}
              <Link
                className="block w-fit mx-auto underline font-bold text-[#f89cab] mt-2"
                to="/shop"
              >
                Shop
              </Link>
            </div>
          )}
        </>
      )}
      {cartItems.length > 0 && <>{auth.user && <CartItems />}</>}
    </div>
  );
}

export default Bag;
