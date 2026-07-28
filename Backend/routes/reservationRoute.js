import express from "express";
import {
  createResrvation,
  getAllResrvation,
  deleteResrvation,
} from "../controllers/reservationControllers.js";

const router = express.Router();

router.post("/create", createResrvation);
router.get("/get", getAllResrvation);
router.delete("/delete/:id", deleteResrvation);

export default router;
