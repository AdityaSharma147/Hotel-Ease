import { Routes, Route } from "react-router-dom";

import HotelDetail from "./pages/HotelDetails";
import HomePage from "./pages/Homepage";
import { Navbar } from "./components/Navbar";
import Serviciespage from "./pages/Serviciespage";
import Aboutpage from "./pages/Aboutpage";

import Loginpage from "./pages/Loginpage";

export const backendUrl = "http://localhost:4000";

function App() {
  return (
    <div className="bg-[url('Luxury.jpg')] bg-cover  bg-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Serviciespage />} />
        <Route path="/room/:id" element={<HotelDetail />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
