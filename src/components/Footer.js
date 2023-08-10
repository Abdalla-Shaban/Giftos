import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import About from "./About";
import Newsletter from "./Newsletter";
import Needhelp from "./Needhelp";
import FooterContact from "./FooterContact";

function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-[#cbc9c9] rounded-t-lg mt-20">
        <h2 className="text-xl text-center pt-4 font-bold">You Can Visit Us From Here...</h2>
      <div className="social-container flex justify-center items-center gap-5 pt-4 p-10">
        <Link
          to="/"
          className="bg-[#1877f2] w-[45px] h-[45px] flex justify-center items-center text-white rounded hover:scale-110"
        >
          <FaFacebookF className="text-3xl" />
        </Link>
        <Link
          to="/"
          className="bg-[#e1306c] w-[45px] h-[45px] flex justify-center items-center text-white rounded hover:scale-110"
        >
          <FaInstagram className="text-3xl" />
        </Link>
        <Link
          to="/"
          className="bg-[#1da1f2] w-[45px] h-[45px] flex justify-center items-center text-white rounded hover:scale-110"
        >
          <FaTwitter className="text-3xl" />
        </Link>
        <Link
          to="/"
          className="bg-[#ff0000] w-[45px] h-[45px] flex justify-center items-center text-white rounded hover:scale-110"
        >
          <FaYoutube className="text-3xl" />
        </Link>
      </div>
      <div className="info-container grid text-center md:text-left md:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
        <About />
        <Newsletter />
        <Needhelp />
        <FooterContact />
      </div>
      <hr />
      <div className="p-5 text-center text-xl font-semibold">Made With ❤ by Abdalla Shaban</div>
    </footer>
  );
}

export default Footer;
