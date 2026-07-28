import React from "react";
import { RoomContext } from "../context/RoomContext";
import { Link, useParams } from "react-router-dom";
import { FaBath } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

const amenitiesList = [
  { label: "1-2 persons", icon: <FaUserFriends /> },
  { label: "Bathtub", icon: <FaBath /> },
  { label: "King Size Bed", icon: <FaBed /> },
  { label: "Free wifi", icon: <FaWifi /> },
];

const HotelList = () => {
  const { rooms } = React.useContext(RoomContext);

  console.log("rooms", rooms);
  return (
    <div className=" bg-[#f7f0eb] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-serif text-center border-2 rounded-xl
         mb-12 text-gray-800"
        >
          Book your stay with us!
          <br /> relex in luxury{" "}
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {rooms && rooms.length > 0 ? (
            rooms.map((room, index) => {
              const { id, image, name, price, description } = room;
              return (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg overflow-hidden "
                >
                  <Link to={`/room/${room._id} `}>
                    <img
                      src={image}
                      alt={name}
                      className="w-full  object-cover"
                    />
                  </Link>
                  <div className="p-5">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {name}
                    </h3>
                    <p className="text-green-600 text-lg mb-4">₹{price}</p>
                    <p>{description}</p>
                    <div className="grid grid-cols-2 gap-4 text-base text-gray-700 p-2">
                      {amenitiesList.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {amenity.icon}
                          <span>{amenity.label} </span>
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
      </div>
    </div>
  );
};

export default HotelList;
