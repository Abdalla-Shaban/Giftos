import savingImg from "../images/saving-img.png";
function Offer() {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-7 bg-[#7fd7eb] rounded py-20 px-5">
        <div className="img-box p-5">
          <img src={savingImg} alt="Saving img" />
        </div>
        <div className="offer flex-1 text-white">
          <h2 className="text-xl md:text-5xl font-bold mb-4 leading-[30px] md:leading-[60px]">
            BEST SAVINGS ON
            <br />
            NEW ARRIVALS
          </h2>
          <p className="text-sm md:text-lg md:w-10/12">
            Qui ex dolore at repellat, quia neque doloribus omnis adipisci,
            ipsum eos odio fugit ut eveniet blanditiis praesentium totam non
            nostrum dignissimos nihil eius facere et eaque. Qui, animi
            obcaecati.
          </p>
        <div className="felx items-center justify-between ctrl mt-8">
          <button className="py-3 px-5 md:px-10 mr-4 bg-[#109dbd] border-[#109dbd] border-2 hover:bg-transparent hover:text-[#109dbd]">Buy Now</button>
          <button className="py-3 px-5 md:px-10 bg-white border-2 text-black hover:bg-transparent hover:text-white">See More</button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
