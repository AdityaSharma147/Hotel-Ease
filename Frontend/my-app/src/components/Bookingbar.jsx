export const Bookingbar = () => {
  return (
    <div className="relative z-30 flex justify-center px-2 w-full -mt-24 sm:-mt-20 lg:-mt-16">
      <div className="w-full max-w-5xl p-5 sm:p-6 border border-l-black border-t-white bg-white/10 backdrop-blur-sm rounded-2xl shadow-md mx-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-4">
          𝓑𝓞𝓞𝓚 𝓨𝓞𝓤𝓡 𝓢𝓣𝓐𝓨
        </h2>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Destination"
            className="p-2 border text-black border-gray-300 rounded-md flex-1"
          />
          <input
            type="date"
            className="p-2 border text-black border-gray-300 rounded-md flex-1"
          />
          <input
            type="number"
            placeholder="Guests"
            className="p-2 border text-black border-gray-300 rounded-md flex-1"
          />
          <button
            type="submit"
            className="bg-[#C27E35] text-white px-6 py-2 rounded-md border hover:bg-[#1a1a2e] transition-colors font-semibold"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
