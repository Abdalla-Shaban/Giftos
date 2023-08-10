import {
  FaCheckToSlot,
  FaCreativeCommonsNc,
  FaSpaceAwesome,
} from "react-icons/fa6";
function Why() {
  return (
    <section className="py-20">
      <h1 className="text-4xl uppercase font-bold text-center mb-2">
        Why Shop With Us
      </h1>
      <div className="info-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        <div className="info-box p-5 text-center flex flex-col justify-center items-center">
          <FaSpaceAwesome className="text-[#320b57] text-5xl" />
          <h3 className="mt-4 mb-2 font-semibold text-2xl">Fast Delivery</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="info-box p-5 text-center flex flex-col justify-center items-center">
          <FaCreativeCommonsNc className="text-[#320b57] text-5xl" />
          <h3 className="mt-4 mb-2 font-semibold text-2xl">Free Shiping</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="info-box p-5 text-center flex flex-col justify-center items-center">
          <FaCheckToSlot className="text-[#320b57] text-5xl" />
          <h3 className="mt-4 mb-2 font-semibold text-2xl">Best Quality</h3>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
      </div>
    </section>
  );
}

export default Why;
