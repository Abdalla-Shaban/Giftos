import { Splide, SplideSlide } from "@splidejs/react-splide";
import welcomeImage from "../images/slider-img.png";
import giftImage from "../images/gifts.png";
import savingImage from "../images/saving-img.png";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <Splide className="p-0" aria-label="Intro Images">
        <SplideSlide>
          <div className="intro flex items-center flex-col md:flex-row bg-[#f89cab] text-white p-6 rounded-b-lg">
            <div className="intro-box flex-1 p-12">
              <h1 className="text-xl md:text-5xl font-bold mb-4 leading-[30px] md:leading-[60px]">
                Wlecome To Our <br />
                Gift Shop
              </h1>
              <p className="text-sm md:text-lg md:w-10/12">
                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit,
                eveniet non necessitatibus error distinctio mollitia suscipit.
                Nostrum fugit doloribus consequatur distinctio esse, possimus
                maiores aliquid repellat beatae cum, perspiciatis enim,
                accusantium perferendis.
              </p>
              <Link
                className="flex items-center justify-center rounded font-bold border-[#db4566] border-2 bg-[#db4566] mt-12 uppercase text-lg w-[180px] h-[40px] transition-all duration-500 hover:bg-transparent hover:text-[#db4566]"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
            <div className="intro-image flex-1 p-12">
              <img
                className="h-[300px] md:min-h-[560px] mx-auto"
                src={welcomeImage}
                alt="introImage"
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="intro flex items-center flex-col md:flex-row bg-[#6929a5] text-white p-6 rounded-b-lg">
            <div className="intro-box flex-1 p-12">
              <h1 className="text-xl md:text-5xl font-bold mb-4 leading-[30px] md:leading-[60px]">
                GIFTS FOR YOUR
                <br />
                LOVED ONES
              </h1>
              <p className="text-sm md:text-lg md:w-10/12">
                Omnis ex nam laudantium odit illum harum, excepturi accusamus at
                corrupti, velit blanditiis unde perspiciatis, vitae minus culpa?
                Beatae at aut consequuntur porro adipisci aliquam eaque iste
                ducimus expedita accusantium?.
              </p>
              <div className="felx items-center md:justify-between mt-8">
                <button className="p-3 text-sm md:text-lg md:px-10 text-black mr-2 bg-white border-2 hover:bg-transparent hover:text-white">
                  Buy Now
                </button>
                <button className="p-3 text-sm md:text-lg md:px-10 bg-transparent border-[#9242dd] border-2 hover:bg-[#9242dd]">
                  See More
                </button>
              </div>
            </div>
            <div className="intro-image flex-1 p-12">
              <img
                className="h-[250px] md:min-h-[560px] mx-auto"
                src={giftImage}
                alt="introImage"
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="intro flex items-center flex-col md:flex-row bg-[#7fd7eb] text-white p-6 rounded-b-lg">
            <div className="intro-box flex-1 p-12">
              <h1 className="text-xl md:text-5xl font-bold mb-4 leading-[30px] md:leading-[60px]">
                BEST SAVINGS ON
                <br />
                NEW ARRIVALS
              </h1>
              <p className="text-sm md:text-lg md:w-10/12">
                Qui ex dolore at repellat, quia neque doloribus omnis adipisci,
                ipsum eos odio fugit ut eveniet blanditiis praesentium totam non
                nostrum dignissimos nihil eius facere et eaque. Qui, animi
                obcaecati.
              </p>
              <div className="felx items-center justify-between ctrl mt-8">
                <button className="p-3 text-sm md:text-lg md:px-10 mr-2 bg-[#109dbd] border-[#109dbd] border-2 hover:bg-transparent hover:text-[#109dbd]">
                  Buy Now
                </button>
                <button className="p-3 text-sm md:text-lg md:px-10 bg-white border-2 text-black hover:bg-transparent hover:text-white">
                  See More
                </button>
              </div>
            </div>
            <div className="intro-image flex-1 p-12">
              <img
                className="h-[220px] md:min-h-[560px] mx-auto"
                src={savingImage}
                alt="introImage"
              />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </>
  );
}

export default Landing;
