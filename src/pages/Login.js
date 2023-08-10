import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login() {
  const MySwal = withReactContent(Swal);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    const credentials = { username, password };
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        credentials
      );
      console.log(response.data);
      auth.login(credentials);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      MySwal.fire({
        title: "Login Error!",
        text: `wrong ${err.message}`,
        icon: "error",
        confirmButtonText: "try again",
      });
    }
  };

  return (
    <form className="mt-10 px-10 md:px-20 py-16 min-w-[350px] md:w-[600px] mx-auto rounded bg-[#f9ece6]">
      <h1 className="text-5xl text-center font-bold mb-8">Login</h1>
      <div className="inputs w-full flex flex-col items-center">
        <div className="input w-full mb-4">
          <label className="text-sm font-semibold mb-3" htmlFor="username">
            Username
          </label>
          <br />
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="p-4 w-full rounded border-2 focus:outline-none focus:border-[#f89cab]"
            type="text"
            id="username"
            placeholder="Type your username"
          />
        </div>
        <div className="input w-full">
          <label className="text-sm font-semibold mb-3" htmlFor="password">
            Password
          </label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 w-full rounded border-2 focus:outline-none focus:border-[#f89cab]"
            type="password"
            id="password"
            placeholder="Type your password"
          />
        </div>
        <Link className="ml-auto underline text-sm font-semibold mt-2" to={""}>
          Forgot password ?
        </Link>
      </div>
      <button
        onClick={handleLogin}
        className="text-xl font-bold uppercase bg-[#f89cab] border-2 border-[#f89cab] w-full py-3 rounded mt-4 mb-3 hover:bg-transparent hover:text-[#f89cab]"
        type="button"
      >
        Login
      </button>
      <Link
        className="block text-center text-xl font-bold bg-white w-full py-3 rounded"
        to="/sign-up"
      >
        Create Account
      </Link>
    </form>
  );
}
export default Login;
