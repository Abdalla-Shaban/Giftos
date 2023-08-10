import { SplideSlide } from "@splidejs/react-splide";
import { FaQuoteRight } from "react-icons/fa6";

function Testimoinal(props) {
  return (
    <SplideSlide className="p-0 overflow-hidden">
      <div className="testimonial-container shadow-custom rounded border-2 p-[25px]">
        <div className="client-info flex p-5">
          <div className="client-name flex-1">
            <h1 className="font-bold text-2xl mb-2 text-[#f78cab]">{props.name}</h1>
            <h3 className="font-semibold text-[#777]">{props.title}</h3>
          </div>
          <FaQuoteRight className="text-3xl rotate-180"/>
        </div>
        <hr/>
        <div className="description p-5">
          <p className="md:text-2xl">{props.description}</p>
        </div>
      </div>
    </SplideSlide>
  );
}

export default Testimoinal;
