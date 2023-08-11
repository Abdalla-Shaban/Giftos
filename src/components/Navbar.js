import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBagShopping, FaUser, FaBars, FaXmark } from "react-icons/fa6";
import { useContext, useState } from "react";
import { useAuth } from "./Auth";
import { CartContext } from "../context/CartContext";
function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [close, setClose] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link
          className="block font-bold text-left md:text-center text-[28px] uppercase w-[180px] md:mx-auto my-4"
          to="/"
        >
          Giftos
        </Link>
        <button
          onClick={() => setClose(!close)}
          className="md:hidden cursor-pointer text-xl transition-all duration-500"
        >
          {!close ? <FaXmark /> : <FaBars />}
        </button>
      </div>
      <div
        className={`absolute w-full left-0 mx-auto z-[1001] md:z-auto md:static md:flex items-center justify-center bg-[#f9ece6] p-2 rounded-t-lg ${
          close ? "-top-[300px]" : "top-18"
        } `}
      >
        <ul className="links md:flex items-center justify-center gap-2 p-2 mr-4">
          <li className="mb-4 md:mb-auto">
            <NavLink
              onClick={() => setClose(true)}
              className=" p-2 uppercase rounded"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mb-4 md:mb-auto">
            <NavLink
              onClick={() => setClose(true)}
              className=" p-2 uppercase rounded"
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="mb-4 md:mb-auto">
            <NavLink
              onClick={() => setClose(true)}
              className=" p-2 uppercase rounded"
              to="/why-us"
            >
              Why Us
            </NavLink>
          </li>
          <li className="mb-4 md:mb-auto">
            <NavLink
              onClick={() => setClose(true)}
              className=" p-2 uppercase rounded"
              to="/testimonials"
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setClose(true)}
              className=" p-2 uppercase rounded"
              to="/contact-us"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
        <div className="user-info md:px-0">
          <ul className="md:flex items-center gap-4">
            <li>
              {!auth.user ? (
                <NavLink
                  onClick={() => setClose(true)}
                  to="/login"
                  className="flex items-center gap-1 p-2 rounded"
                >
                  <FaUser /> Profile
                </NavLink>
              ) : (
                <div className="flex items-center gap-3">
                  <NavLink
                    onClick={() => setClose(true)}
                    to="/profile"
                    className="flex items-center gap-1 p-2 rounded"
                  >
                    <FaUser /> Profile
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                       setClose(true);
                    }}
                    className="p-2 bg-red-600 text-white font-semibold rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
            <li className="flex-1 relative">
              <NavLink
                onClick={() => setClose(true)}
                className="flex items-center gap-1 p-2 rounded"
                to="/bag"
              >
                <FaBagShopping />
                Bag{" "}
                {cartItems.length > 0 && (
                  <>
                    {auth.user && (
                      <span className="absolute -top-2 right-0 text-white font-bold flex justify-center items-center w-[20px] h-[20px] bg-[#f89cab] rounded-full">
                        {cartItems.length}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
