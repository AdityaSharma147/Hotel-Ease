import {
  FaCocktail,
  FaCar,
  FaShuttleVan,
  FaBath,
  FaConciergeBell,
  FaSwimmingPool,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShuttleVan size={32} />,
    title: "Pick Up & Drop",
    desc: "we'll Pick up from airport while you comfy on your ride",
  },
  {
    icon: <FaCar size={32} />,
    title: "Tour Car Service",
    desc: "Comfortable rides for sightseeing and local exploration.",
  },
  {
    icon: <FaCocktail size={32} />,
    title: " Refreshing Drinks",
    desc: "A curated selection of cocktails, mocktails, and fine beverages.",
  },
  {
    icon: <FaBath size={32} />,
    title: "Luxurious Baths",
    desc: "Spacious bathrooms with modern fittings for ultimate relaxation.",
  },
  {
    icon: <FaConciergeBell size={32} />,
    title: "Delicious Food",
    desc: "From gourmet dining to local specialties, every meal is crafted with care.",
  },
  {
    icon: <FaSwimmingPool size={32} />,
    title: "Inviting Pool",
    desc: "A sparkling pool perfect for leisure swims or unwinding by the water.",
  },
];

const Facilities = () => {
  return (
    <div className="bg-[#f8f0eb] py-16 px-4 md:px-20 sm:left-25 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm tracking-widest uppercase text-gray-500">
            Services
          </p>
          <h2 className="text-4xl font-serif text-gray-800">
            Facilties & Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start space-y-3">
              <div className="bg-[#EEB76B] rounded-full p-5 text-black">
                {service.icon}{" "}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-500 max-w-xs text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
