import React, { useContext, useState } from "react";
import { RoomContext } from "../context/RoomContext";
import { Link } from "react-router-dom";
import { FaBath, FaUserFriends, FaBed, FaWifi } from "react-icons/fa";
import { Footer } from "../components/Footer";

const amenitiesList = [
  { label: "1-2 persons", icon: <FaUserFriends /> },
  { label: "Bathtub", icon: <FaBath /> },
  { label: "King Size Bed", icon: <FaBed /> },
  { label: "Free wifi", icon: <FaWifi /> },
];

const ROOMS_PER_PAGE = 12;

const AllRooms = () => {
  const { rooms } = useContext(RoomContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rooms.length / ROOMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROOMS_PER_PAGE;
  const currentRooms = rooms.slice(startIndex, startIndex + ROOMS_PER_PAGE);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f0eb]">
      <div className="grow pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-serif text-center mb-10 text-gray-800">
            All Rooms
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12">
            {currentRooms.map((room, index) => {
              const { image, name, price, description } = room;
              return (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg overflow-hidden flex flex-col"
                >
                  <Link to={`/room/${room._id}`}>
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-56 sm:h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 sm:p-5 flex flex-col grow">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                      {name}
                    </h3>
                    <p className="text-green-600 text-base sm:text-lg mb-2 sm:mb-4">
                      ₹{price}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                      {description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-gray-700 pt-4 mt-auto">
                      {amenitiesList.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {amenity.icon}
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md border border-[#C27E35] text-[#C27E35] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#C27E35] hover:text-white transition-colors"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  currentPage === page
                    ? "bg-[#C27E35] text-white border-[#C27E35]"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md border border-[#C27E35] text-[#C27E35] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#C27E35] hover:text-white transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllRooms;
