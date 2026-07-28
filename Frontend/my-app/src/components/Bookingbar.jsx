export const Bookingbar = () => {
  return (
    <div className="absolute z-30 lg:top-125 backdrop-blur-sm  sm:top-50  flex justify-center my-8 px-2 w-full">
      <div
        className=" w-full  p-5 border
      border-l-black border-t-white bg-white/10 rounded-2xl shadow-md mx-2"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          𝓑𝓞𝓞𝓚 𝓨𝓞𝓤𝓡 𝓢𝓣𝓐𝓨
        </h2>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="text-search"
            placeholder="Destination"
            className="p-2 border text-black border-l-gray-300
            border-t-gray-300 rounded-md flex-1"
          />
          <input
            type="date"
            className="p-2 border text-black   border-l-gray-300 
            border-t-gray-300 rounded-md flex-1"
          />
          <input
            type="number"
            placeholder="Guests"
            className="p-2 border  border-l-gray-300
            border-t-gray-300 text-black rounded-md flex-1"
          />

          <button
            type="submit"
            className="bg-[#C27E35] text-white p-1 rounded-md border  hover:bg-[#1a1a2e] transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
