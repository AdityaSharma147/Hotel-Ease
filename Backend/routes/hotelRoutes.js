import express from "express";
import upload from "../middleware/multer.js";
import {
  addHotel,
  listHotel,
  removeHotel,
  singleHotel,
} from "../controllers/hotelControllers.js";

const hotelRouter = express.Router();

hotelRouter.post("/add", upload.single("image"), addHotel);
hotelRouter.get("/list", listHotel);
hotelRouter.post("/remove", removeHotel);
hotelRouter.get("/rooms/:id", singleHotel);

export default hotelRouter;
