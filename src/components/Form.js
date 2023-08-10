
function Form() {
  return (
    <form className="flex-1 flex flex-col gap-5 pt-5 md:p-5" onSubmit={(e) => e.preventDefault()}>
        <input className="border-2 p-4 font-semibold" type="text" placeholder="Name" />
        <input className="border-2 p-4 font-semibold" type="email" placeholder="Email" />
        <input className="border-2 p-4 font-semibold" type="text" placeholder="Phone"/>
        <textarea className="border-2 p-4 font-semibold resize-none" placeholder="Message"></textarea>
        <button className="w-full md:w-[180px] ml-auto py-3 px-10 border-2 border-[#db4f66] bg-[#db4f66] uppercase text-white hover:bg-transparent hover:text-[#db4f66]" type="submit">Send</button>
    </form>
  )
}

export default Form