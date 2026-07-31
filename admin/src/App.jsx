import React, { useEffect, useState } from "react";
import { Login } from "./Components/Login.jsx";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar.jsx";
import { AddHotel } from "./pages/AddHotel.jsx";
import { ListHotel } from "./pages/ListHotel.jsx";
import { Reservation } from "./pages/Reservation.jsx";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="bg-White min-h-screen">
      {/* <ToastContainer /> */}
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <div className="flex w-full">
            <Sidebar setToken={setToken} />
            <div className="w-[70%] ml-[max(5vw, 25px)] my-8 text-black text-base">
              <Routes>
                <Route path="/add" element={<AddHotel token={token} />} />
                <Route path="/list" element={<ListHotel token={token} />} />

                <Route path="/reservation" element={<Reservation />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
