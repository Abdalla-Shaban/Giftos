import giftImg from "../images/gifts.png";
function Gifts() {
  return (
    <section className="pt-10 gifts">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-7 bg-[#6929a5] rounded p-5">
        <div className="img-box">
          <img className="max-h-[600px] p-5 max-w-full" src={giftImg} alt="Saving img" />
        </div>
        <div className="offer flex-1 text-white">
          <h2 className="text-xl md:text-5xl font-bold mb-4 leading-[30px] md:leading-[60px]">
            GIFTS FOR YOUR
            <br />
            LOVED ONES
          </h2>
          <p className="text-sm md:text-lg md:w-10/12">
            Omnis ex nam laudantium odit illum harum, excepturi accusamus at
            corrupti, velit blanditiis unde perspiciatis, vitae minus culpa?
            Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus
            expedita accusantium?.
          </p>
          <div className="felx items-center justify-between ctrl mt-8">
            <button className="py-3 px-5 md:px-10 mr-4 text-black bg-white border-2 hover:bg-transparent hover:text-white">
              Buy Now
            </button>
            <button className="py-3 px-5 md:px-10 bg-transparent border-[#9242dd] border-2 hover:bg-[#9242dd]">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gifts;
