import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
function FooterContact() {
  return (
    <div className="contact-us">
      <h2 className="text-xl font-bold uppercase mb-3">Contact Us</h2>
      <ul className="flex flex-col gap-3 items-center md:items-start">
        <li>
          <Link className="flex items-center gap-1 hover:pl-2 hover:text-white" to={""}>
            <FaMapMarkerAlt /> Gb road 123 london Uk{" "}
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-1 hover:pl-2 hover:text-white" to={""}>
            <FaPhoneAlt /> +2024781867{" "}
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-1 hover:pl-2 hover:text-white" to={""}>
            <FaEnvelope /> mail@gmail.com{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterContact;
