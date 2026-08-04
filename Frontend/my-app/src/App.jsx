import { Routes, Route } from "react-router-dom";

import HotelDetail from "./pages/HotelDetails";
import HomePage from "./pages/Homepage";
import { Navbar } from "./components/Navbar";
import Serviciespage from "./pages/Serviciespage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage.jsx";
import AllRooms from "./pages/AllRooms.jsx";
import Loginpage from "./pages/Loginpage";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  return (
    <div className="bg-[url('Luxury.jpg')] bg-cover  bg-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/services" element={<Serviciespage />} />
        <Route path="/rooms" element={<AllRooms />} />
        <Route path="/room/:id" element={<HotelDetail />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
