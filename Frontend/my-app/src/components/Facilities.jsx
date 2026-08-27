import { useState } from "react";
import {
  FaCocktail,
  FaCar,
  FaShuttleVan,
  FaBath,
  FaConciergeBell,
  FaSwimmingPool,
  FaTimes,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShuttleVan size={32} />,
    bigIcon: <FaShuttleVan size={64} />,
    title: "Pick Up & Drop",
    desc: "we'll Pick up from airport while you comfy on your ride",
    details:
      "Our dedicated shuttle service ensures a seamless start and end to your stay. Simply share your flight details, and our chauffeurs will be waiting for you at the arrivals gate — no waiting, no hassle. Available 24/7 for airport and railway station transfers.",
  },
  {
    icon: <FaCar size={32} />,
    bigIcon: <FaCar size={64} />,
    title: "Tour Car Service",
    desc: "Comfortable rides for sightseeing and local exploration.",
    details:
      "Explore Alwar and its surroundings in comfort with our private car service. Choose from half-day or full-day packages, complete with an experienced local driver who knows the best routes, hidden gems, and historic sites worth visiting.",
  },
  {
    icon: <FaCocktail size={32} />,
    bigIcon: <FaCocktail size={64} />,
    title: "Refreshing Drinks",
    desc: "A curated selection of cocktails, mocktails, and fine beverages.",
    details:
      "Unwind at our lounge with a hand-crafted selection of cocktails, mocktails, and premium spirits. Our mixologists blend local flavors with classic recipes for a drink menu that's as memorable as your stay.",
  },
  {
    icon: <FaBath size={32} />,
    bigIcon: <FaBath size={64} />,
    title: "Luxurious Baths",
    desc: "Spacious bathrooms with modern fittings for ultimate relaxation.",
    details:
      "Every room features a spacious, spa-inspired bathroom with premium fittings, deep soaking tubs, and rainfall showers. Complimentary toiletries and plush towels ensure your relaxation is never compromised.",
  },
  {
    icon: <FaConciergeBell size={32} />,
    bigIcon: <FaConciergeBell size={64} />,
    title: "Delicious Food",
    desc: "From gourmet dining to local specialties, every meal is crafted with care.",
    details:
      "Our in-house restaurant serves a thoughtfully curated menu spanning Rajasthani classics and global favorites. Available for in-room dining or at our elegant dining hall, with fresh ingredients sourced daily.",
  },
  {
    icon: <FaSwimmingPool size={32} />,
    bigIcon: <FaSwimmingPool size={64} />,
    title: "Inviting Pool",
    desc: "A sparkling pool perfect for leisure swims or unwinding by the water.",
    details:
      "Take a dip in our temperature-controlled pool, open year-round. Surrounded by loungers and shaded cabanas, it's the perfect spot for a relaxing afternoon or a refreshing morning swim.",
  },
];

const Facilities = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-[#f8f0eb] py-16 px-4 md:px-20 sm:left-25">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 bg-[#EEB76B] p-3 w-85 border-2  rounded-xl border-amber-900 ">
          <p className="text-md tracking-widest uppercase text-gray-500">
            Services
          </p>
          <h2 className="text-4xl font-serif text-gray-800">
            Facilties & Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 border-2 border-amber-900 rounded-xl p-4 gap-10">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service)}
              className="flex flex-col items-start space-y-3 text-left group cursor-pointer"
            >
              <div className="bg-[#EEB76B] rounded-full p-5 text-black group-hover:bg-[#E8B86D] group-hover:text-[#1a1a2e] group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#C27E35] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 max-w-xs text-sm">{service.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#f8f0eb]  rounded-2xl max-w-lg w-full p-8 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#C27E35] transition-colors"
            >
              <FaTimes size={22} />
            </button>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-[#EEB76B] rounded-full p-6 text-[#1a1a2e]">
                {selectedService.bigIcon}
              </div>
              <h3 className="text-3xl font-serif text-gray-700">
                {selectedService.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {selectedService.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
