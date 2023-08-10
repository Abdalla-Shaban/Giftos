import { Link } from "react-router-dom";
import { useAuth } from "../components/Auth"

function Profile() {
    const auth = useAuth();
    console.log(auth.user);
  return (
    <div className="profile text-center p-20">
        <h2 className="text-2xl font-semibold mb-4">Welcome <span className="font-bold text-[#db4f66]">{auth.user}</span></h2>
        <ul>
            <li className="text-xl font-semibold mb-1">Now You Can Add Products To Your Own <Link className="underline font-bold text-[#f89cab]" to="/bag">Bag</Link></li>
        </ul>
    </div>
  )
}

export default Profile