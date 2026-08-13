import React from "react";
import { RoomContext } from "../context/RoomContext";
import { Link } from "react-router-dom";
import { FaBath, FaUserFriends, FaBed, FaWifi } from "react-icons/fa";

const amenitiesList = [
  { label: "1-2 persons", icon: <FaUserFriends /> },
  { label: "Bathtub", icon: <FaBath /> },
  { label: "King Size Bed", icon: <FaBed /> },
  { label: "Free wifi", icon: <FaWifi /> },
];

const HotelList = ({ limit }) => {
  const { rooms } = React.useContext(RoomContext);

  const displayedRooms = limit ? rooms.slice(0, limit) : rooms;

  return (
    <div className="bg-[#f7f0eb] py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center border-2 rounded-xl p-4 mb-10 sm:mb-12 text-gray-800">
          Book your stay with us!
          <br /> relax in luxury
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {displayedRooms && displayedRooms.length > 0 ? (
            displayedRooms.map((room, index) => {
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
            })
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No rooms available
            </p>
          )}
        </div>

        {limit && rooms.length > limit && (
          <div className="flex justify-center mt-10">
            <Link
              to="/rooms"
              className="bg-[#C27E35] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1a1a2e] transition-colors border-2"
            >
              View All Rooms
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelList;
