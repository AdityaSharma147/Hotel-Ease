import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";

export const Reservation = () => {
  const [reservations, setReservation] = useState([]);
  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(backendUrl + "/api/reservations/get");
        setReservation(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservation();
  }, []);
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 text-center mb-6">
        Reservation
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full shadow-lg rounded-xl">
          <thead>
            <tr className="bg-amber-500 text-left text-white">
              <th className="p-3">Room Name</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Guests</th>
              <th className="p-3">Check-in</th>
              <th className="p-3">check-out</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="8" className="p-4 text-center">
                  No Reservation Avilable
                </td>
              </tr>
            ) : (
              reservations.map((res, index) => (
                <tr key={index} className="border-b hover:border-r-gray-300">
                  <td className="p-3">{res.roomName}</td>
                  <td className="p-3">{res.name}</td>
                  <td className="p-3">{res.email}</td>
                  <td className="p-3">{res.phone}</td>
                  <td className="p-3">{res.guests}</td>
                  <td className="p-3">{res.checkin}</td>
                  <td className="p-3">{res.checkout}</td>
                  <td className="p-3">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-2xl">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
