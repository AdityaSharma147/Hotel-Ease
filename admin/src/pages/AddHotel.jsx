import React, { useState } from "react";
import default_img from "../assets/upload_img.png";
import { backendUrl } from "../App";
import axios from "axios";

export const AddHotel = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const roomSubmission = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      if (image) formData.append("image", image);

      const response = await axios.post(
        `${backendUrl}/api/hotel/add`,
        formData,
        { headers: { token } },
      );

      if (response.data.success) {
        console.log(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage(null);
      } else {
        console.error("Room submission faild", response.data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="ml-8">
      <form
        onSubmit={roomSubmission}
        className="flex flex-col items-start gap-2"
      >
        <div>
          <p>Upload Image</p>
          <div>
            <label htmlFor="image">
              <img
                src={!image ? default_img : URL.createObjectURL(image)}
                id="123"
                className="w-32 cursor-pointer"
                alt="img"
              />
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                hidden
              />
            </label>
          </div>
        </div>
        <div className="w-full">
          <p className="mb-text-[22px]">Room Name</p>
          <input
            type="text"
            placeholder="Enter room name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-fullvmax-w-[500px] p-4 border border-gray-300 rounded-2xl"
            id="51"
          />
        </div>
        <div className="w-full">
          <p className="mb-text-[22px]">Room Description</p>
          <input
            type="text"
            placeholder="Enter room description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-fullvmax-w-[500px] p-4 border border-gray-300 rounded-2xl"
            id="634"
          />
        </div>

        <div className="w-full">
          <p className="mb-text-[22px]">Price</p>
          <input
            type="number"
            placeholder="4000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-fullvmax-w-[500px] p-4 border border-gray-300 rounded-2xl"
            id="4242"
          />
        </div>
        <button className="mt-6 px-20 py-3 bg-amber-600 rounded" type="submit">
          Add Room
        </button>
      </form>
    </div>
  );
};
