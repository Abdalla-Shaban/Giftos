function Newsletter() {
  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-xl font-bold uppercase">Newsletter</h2>
      <input className="py-3 pl-3 mx-auto md:mx-0 text-black w-[80%]" type="email" placeholder="Enter you email" />
      <button
        className="uppercase py-3 mx-auto md:mx-0 w-[50%] bg-[#f89cab] border-2 border-[#f89cab] text-white hover:bg-transparent hover:text-[#f89cab]"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
}

export default Newsletter;
