import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Footer } from "../components/Footer.jsx";
import BGImg from "../assets/Luxury.jpg";
import { backendUrl } from "../App";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`${backendUrl}/api/user/register`, {
        name,
        email,
        password,
      });

      if (response.data.success) {
        navigate("/login");
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="relative flex text-black justify-center items-center min-h-screen">
        <img
          src={BGImg}
          alt="Hotel Ease luxury background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="bg-amber-200 shadow-md rounded-lg px-8 py-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

          {error && (
            <p className="text-red-600 text-sm text-center mb-3">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Full Name</p>
              <input
                id="signup-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
                required
              />
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Email Address</p>
              <input
                id="signup-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
                required
              />
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Password</p>
              <input
                id="signup-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-500 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white rounded-md p-2 text-md text-[#C27E35] border-2 border-[#C27E35] hover:bg-[#1a1a2e] hover:text-white transition-colors font-semibold disabled:opacity-50"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#C27E35] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
