import hotelModel from "../models/hotelModels.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const addHotel = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file;
    let imageUrl = "";

    if (image) {
      let result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    } else {
      imageUrl =
        "https://www.bing.com/images/search?view=detailV2&id=9B22B679D97155F1826D392472DEEAB65F3C15D6&thid=OIP.9bs1mSxkRy7sQ1KI_F-C_AHaEK&mediaurl=https%3a%2f%2fcache.marriott.com%2fcontent%2fdam%2fmarriott-renditions%2fSYXEB%2fsyxeb-spa-5353-hor-wide.jpg&exph=2250&expw=4000&q=hotels+with+spa&simid=608002486716413751&ck=A6F0D4449CCFFCC54F4A9EC987625126&itb=0&FORM=IVCLIG";
    }

    const hotelData = {
      name,
      description,
      price: Number(price),
      image: imageUrl,
      date: Date.now(),
    };

    const hotels = new hotelModel(hotelData);
    await hotels.save();

    res.json({ success: true, message: "Hotel room added succesfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding hotel " });
  }
};
const listHotel = async (req, res) => {
  try {
    const hotels = await hotelModel.find({});
    res.json({ success: true, hotels });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error listing hotelroom" });
  }
};
const removeHotel = async (req, res) => {
  try {
    await hotelModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "Hotel room removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error deleting hotel room" });
  }
};
const singleHotel = async (req, res) => {
  try {
    const hotels = await hotelModel.findById(req.params.id);
    if (!hotels) return res.json({ message: "Room not found" });
    res.json({ hotels });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching specific hotel room" });
  }
};

export { addHotel, listHotel, removeHotel, singleHotel };
