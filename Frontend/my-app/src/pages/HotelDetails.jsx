import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  FaUtensils,
  FaWifi,
  FaTv,
  FaSwimmingPool,
  FaConciergeBell,
} from "react-icons/fa";
// import { roomData } from "../assets/asset";
import { useParams } from "react-router-dom";
import HotelList from "../components/HotelList";
import { RoomContext } from "../context/RoomContext";
import { backendUrl } from "../App";

const HotelDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [formData, setFormData] = useState({
    roomName: "",
    roomId: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${backendUrl}/api/hotel/rooms/${id}`);
        setRoom(response.data.hotels);
        setFormData((prev) => ({
          ...prev,
          roomName: response.data.hotels.name,
          roomId: response.data.hotels._id,
        }));
        setError(null);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch room details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRoomDetails();
    }
  }, [id]);
  if (loading) {
    return <div className="text-center p-8">Loading room details...</div>;
  }

  if (error || !room) {
    return (
      <div className="text-center p-8 text-red-500">
        {error || "Room not found"}
      </div>
    );
  }

  return (
    <div>
      <div className=" mx-4 mt-18 max-7xl grid grid-cols-2 gap-8 p-6 bg-amber-200  rounded-xl ">
        {/*  Left side */}
        <div className=" md:col-span-1 space-y-6">
          <div>
            <div>
              <img
                src={room.image}
                alt={room.name}
                className="w-full rounded-lg shadow-md"
              />
              <h1 className="text-3xl font-bold">{room.name}</h1>
              <p>{room.description}</p>
              <p className="text-xl text-green-500 mt-1">₹{room.price}</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <FaWifi /> Wi-Fi
              </div>
              <div className="flex items-center gap-2">
                <FaTv /> Cable TV
              </div>
              <div className="flex items-center gap-2">
                <FaUtensils />
                Resturant
              </div>
              <div className="flex items-center gap-2">
                <FaSwimmingPool />
                Pool
              </div>
              <div className="flex items-center gap-2">
                <FaConciergeBell /> Room Service
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* Right side */}
        <div className="bg-white p-6 mt-18 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
          <form className="space-y-4">
            <input
              type="text"
              name=""
              id="806"
              placeholder="Name"
              className="w-full border border-b-gray-300 p-3 rounded-lg"
            />
            <input
              type="email"
              name=""
              id="805"
              placeholder="Email"
              className="w-full border border-b-gray-300 p-3 rounded-lg"
            />
            <input
              type="tel"
              name=""
              id="804"
              placeholder="Phone Number"
              className="w-full border border-b-gray-300 p-3 rounded-lg"
            />
            <div>
              <label htmlFor="803" className="font-bold">
                Check-In
              </label>
              <input
                type="date"
                name=""
                id="803"
                className="w-full border border-b-gray-300 p-3 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="802" className="font-bold">
                Check-Out
              </label>
              <input
                type="date"
                name=""
                id="802"
                className="w-full border border-b-gray-300 p-3 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="801" className="font-bold">
                Number of Guests
              </label>
              <select
                name=""
                id="801"
                className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300"
              >
                {[
                  ...Array(3)
                    .keys()
                    .map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Guest(s)
                      </option>
                    )),
                ]}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-400 text-white p-3 rounded-lg hover:bg-amber-950 transition-none"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <div>
        <HotelList />
      </div>
    </div>
  );
};

export default HotelDetails;
