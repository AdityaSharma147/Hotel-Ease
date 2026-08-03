import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full flex justify-between items-center top-0 z-50 h-16 px-4 duration-700 backdrop-blur-sm bg-black/10">
      <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <IoMenu size={40} color="white" />
      </button>

      <Link to="/" className="mx-auto lg:mx-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white inline-flex">
          ℌ𝔬𝔱𝔢𝔩
          <span className="text-[#C27E35]">𝔈𝔞𝔰𝔢</span>
        </h1>
      </Link>

      <nav className="hidden lg:flex gap-8 text-white font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>

      <button className="bg-white rounded-md px-3 py-1 text-sm sm:text-md text-[#C27E35] border-2 border-[#C27E35] hover:bg-[#1a1a2e] hover:text-white transition-colors font-semibold">
        <Link to="/login">Login</Link>
      </button>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-40 lg:hidden   ">
          <nav className="flex flex-col items-center gap-6 pt-10  bg-black/70 ">
            <Link
              className="text-white text-lg border-b w-full text-center pb-2"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-white text-lg border-b w-full text-center pb-2"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="text-white text-lg border-b w-full text-center pb-2"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              className="text-white text-lg border-b w-full text-center pb-2"
              to="/services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
