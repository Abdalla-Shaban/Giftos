import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  firstName: "",
  email: ""
};

function SignUp() {
  const [credentials, setCredentials] = useState(initialState);
  const MySwal = withReactContent(Swal);
  const handleChanges = (e) => {
    const { value, name } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', credentials);
      console.log(response.data);
    } catch(err){
      console.log(err.message);
      MySwal.fire({
        title: "Login Error!",
        text: `wrong ${err.message}`,
        icon: "error",
        confirmButtonText: "try again",
      });
    }
  }

  return (
    <form className="mt-10 px-10 md:px-20 py-16 min-w-[350px] md:w-[600px] mx-auto rounded bg-[#f9ece6]">
      <h1 className="text-5xl text-center font-bold mb-8">Sign Up</h1>
      <div className="inputs">
        <div className="input mb-4">
          <label className="text-sm font-semibold mb-3" htmlFor="username">
            Username
          </label>
          <input
            className="p-4 w-full rounded border-2 focus:outline-none focus:border-[#f89cab]"
            type="text"
            id="username"
            name="username"
            onChange={handleChanges}
            placeholder="Type your username"
          />
        </div>
        <div className="input mb-4">
          <label className="text-sm font-semibold mb-3" htmlFor="firstName">
            First Name
          </label>
          <input
            className="p-4 w-full rounded border-2 focus:outline-none focus:border-[#f89cab]"
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChanges}
            placeholder="Type your first name"
          />
        </div>

        <div className="input mb-4">
          <label className="text-sm font-semibold mb-3" htmlFor="email">
            Email
          </label>
          <input
            className="p-4 w-full rounded border-2 focus:outline-none focus:border-[#f89cab]"
            type="email"
            id="email"
            name="email"
            onChange={handleChanges}
            placeholder="Type your email"
          />
        </div>
        <div className="input mb-4">
          <label className="text-sm font-semibold mb-3" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="p-4 w-full rounded border-2 focus:outline-none focus:border-[#f89cab]"
            type="password"
            id="password"
            name="password"
            onChange={handleChanges}
            placeholder="Type your password"
          />
        </div>
      </div>
      <button
        className="text-xl font-bold uppercase bg-[#f89cab] border-2 border-[#f89cab] w-full py-3 rounded mt-4 mb-3 hover:bg-transparent hover:text-[#f89cab]"
        type="button"
        onClick={handleSubmit}
      >
        Create Account
      </button>
      <Link
        className="block text-center text-xl font-bold bg-white w-full py-3 rounded"
        to="/login"
      >
        Login
      </Link>
    </form>
  );
}

export default SignUp;
