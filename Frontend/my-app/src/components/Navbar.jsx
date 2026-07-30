import { useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  const navContainerRef = useRef(null);
  return (
    <div
      ref={navContainerRef}
      className="fixed w-full flex top-0 z-50 h-16 items-center py-5 duration-700 backdrop-blur-sm bg-black/10  "
    >
      <div className="absolute left-0 right-0 justify-center text-white gap-1  font-bold flex   items-center   ">
        <Link to="/">
          <h1 className="text-4xl inline-flex ">
            ℌ𝔬𝔱𝔢𝔩
            <span className="text-[#C27E35]">𝔈𝔞𝔰𝔢</span>
          </h1>
        </Link>
      </div>

      <button className="absolute bg-white right-4 rounded-md p-1 text-md text-[#C27E35] border-2 border-[#C27E35] hover:bg-[#1a1a2e] transition-colors font-semibold">
        <Link to="/login">Login</Link>
      </button>
      <div className="absolute left-4 ml-2 lg:hidden ">
        <button onClick={toggleMobileMenu}>
          <IoMenu size={40} color="white" />
        </button>
      </div>
      <div
        id="mobileMenu"
        className=" hidden fixed top-16 bottom-0 items-center h-25  z-40 lg:hidden bg-black/60 border   "
      >
        <nav className="flex flex-col  gap-6 h-full w-full  items-center">
          <ul className=" text-[#ffffff] font-semibold gap-16 ">
            <li className="border-b w-185 items-center">
              <Link className="left-0 right-0" to="/">
                Home
              </Link>
            </li>
            <li className="border-b w-185 items-center">
              <Link className="left-0 right-0" to="/about">
                About
              </Link>
            </li>
            <li className="border-b w-185 items-center">
              <Link className="left-0 right-0" to="/contact">
                Contact
              </Link>
            </li>
            <li className="border-b w-186 items-center">
              <Link className="left-0 right-0" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
