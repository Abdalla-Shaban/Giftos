import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Gifts from "../components/Gifts";
import Header from "../components/Header";
import LatestProducts from "../components/LatestProducts";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
import Why from "../components/Why";
import { FaAnglesUp } from "react-icons/fa6";
function Home() {
  const [scrollUp, setScrollup] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setScrollup(true);
      } else {
        setScrollup(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed w-[55px] h-[55px] md:w-[80px] md:h-[80px] bottom-8 bg-[#f89cab] text-white text-2xl md:text-4xl z-[999] rounded-full flex items-center justify-center ${
          scrollUp ? "right-8" : "right-[-350px]"
        }`}
      >
        <FaAnglesUp />
      </button>
      <Header />
      <LatestProducts />
      <Offer />
      <Why />
      <Gifts />
      <Contact />
      <Testimonials />
    </>
  );
}

export default Home;
