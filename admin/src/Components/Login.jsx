import React, { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";

export const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminLoginHandeler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      console.log(response);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-bold text-center text-gray-800 mb-4">
            Admin Login
          </h1>
          <form onSubmit={adminLoginHandeler}>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Email Address
              </p>
              <input
                id="1"
                name=""
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Password
              </p>
              <input
                id="2"
                name=""
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
                required
              />
            </div>
            <button
              type="submit"
              className="w-[95%] px-3 py-2 text-lg rounded-md font-bold bg-amber-400 hover:bg-amber-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
