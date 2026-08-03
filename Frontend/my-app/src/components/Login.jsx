import React from "react";
import { Footer } from "./Footer";
import BGImg from "../assets/Luxury.jpg";

const Login = () => {
  return (
    <div>
      <div className="flex text-black justify-center items-center min-h-screen">
        <img
          src={BGImg}
          alt="Hotel Ease luxury background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="bg-linear-to-br bg-amber-200 shadow-md rounded-lg px-8 py-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-bold text-center  mb-4">
            Login
          </h1>
          <form>
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Email Address</p>
              <input
                id="1"
                name=""
                type="email"
                placeholder="Enter admin email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold  mb-2">Password</p>
              <input
                id="2"
                name=""
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white  rounded-md p-1 text-md text-[#C27E35] border-2 border-[#C27E35] hover:bg-[#1a1a2e] transition-colors font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
