import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

export const ListHotel = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchRoomList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/hotel/list", {
        headers: { token },
      });

      if (response.data.success) {
        setList(response.data.hotels);
      } else {
        console.log("Response data:", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRoomList();
  }, []);
  return (
    <div>
      <p className="mb-2 font-bold text-2xl">HOtel Room List</p>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_3fr_1fr_1fr] item-center p-2 border-b-2 border-gray-300 text-lg font-semibold">
          <b>image</b>
          <b>Room Name</b>
          <b>Price</b>
          <b className="text-center">Delete</b>
        </div>
        {Array.isArray(list) &&
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr_1fr_1fr] item-center p-2 border-b-2 border-gray-300 text-lg "
            >
              <img src={item.image} alt="" className="w-12.5 h-auto" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <MdDeleteForever className="ml-10 text-[28px] cursor-pointer text-red-600" />
            </div>
          ))}
      </div>
    </div>
  );
};
