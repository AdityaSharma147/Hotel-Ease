import reservationModels from "../models/reservationModels.js";

const createResrvation = async (req, res) => {
  try {
    const { name, email, phone, checkin, checkout, guests, roomName, roomId } =
      req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !checkin ||
      !checkout ||
      !guests ||
      !roomName ||
      !roomId
    ) {
      return res.json({ message: "All fields are required" });
    }

    const newReservation = new reservationModels({
      name,
      email,
      phone,
      checkin,
      checkout,
      guests,
      roomName,
      roomId,
    });
    await newReservation.save();

    res.json({
      message: "Reservation created successfully",
      reservation: newReservation,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error creating reservation " });
  }
};
const getAllResrvation = async (req, res) => {
  try {
    const reservations = await reservationModels.find();
    res.json(reservations);
  } catch (error) {
    res.json({ message: "Error fetching reservation" });
  }
};
const deleteResrvation = async (req, res) => {
  try {
    const { id } = req.params;
    await reservationModels.findByIdAndDelete(id);
    res.json({ message: "Reservation deleted reservation" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error deleting reservation" });
  }
};

export { createResrvation, getAllResrvation, deleteResrvation };
