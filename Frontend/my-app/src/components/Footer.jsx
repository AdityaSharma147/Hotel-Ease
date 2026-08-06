import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-linear-to-br from-[#1a1a2e] via-[#2b2420] to-[#C27E35] text-white text-center p-4 sm:p-6">
      <div className="flex flex-col gap-4">
        {/* Top section */}
        <div className="grid place-content-center gap-4 text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Sign Up For Exclusive Offers
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto w-full gap-2 sm:gap-0">
            <input
              id="701"
              className="w-full grow px-6 sm:px-10 py-3 sm:py-4 border-3 sm:border-r-0 border-white rounded-full sm:rounded-l-full sm:rounded-r-none outline-none text-sm text-white"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="w-full sm:w-auto whitespace-nowrap bg-[#C27E35] rounded-full sm:rounded-r-full sm:rounded-l-none p-4 sm:p-4 text-sm sm:text-md text-white border-3 border-white hover:bg-white hover:text-[#C27E35] transition-colors font-semibold">
              Join Now
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-4 border border-[#C27E35]/40 m-4 p-4 rounded-lg">
          <Link to="/">
            <h1 className="text-xl sm:text-2xl font-bold">
              ℌ𝔬𝔱𝔢𝔩<span className="text-[#C27E35]">𝔈𝔞𝔰𝔢</span>
            </h1>
          </Link>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 py-4">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 p-1">
                <FaFacebook
                  size={22}
                  className="cursor-pointer text-[#E8B86D] hover:text-white transition-colors"
                />{" "}
                @HotelEase
              </li>
              <li className="flex items-center gap-2 p-1">
                <FaInstagram
                  size={22}
                  className="cursor-pointer text-[#E8B86D] hover:text-white transition-colors"
                />{" "}
                @HotelEase
              </li>
              <li className="flex items-center gap-2 p-1">
                <FaYoutube
                  size={22}
                  className="cursor-pointer text-[#E8B86D] hover:text-white transition-colors"
                />{" "}
                @HotelEase
              </li>
            </ul>

            <ul className="flex flex-col gap-2 text-base font-medium">
              <li>
                <Link
                  to="/"
                  className="cursor-pointer hover:text-[#E8B86D] transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="cursor-pointer hover:text-[#E8B86D] transition-colors"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="cursor-pointer hover:text-[#E8B86D] transition-colors"
                >
                  ROOMS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-[#E8B86D] transition-colors"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-xs sm:text-sm w-full mt-2 text-gray-300">
        &copy; 2026 World Wanderers. All rights reserved.
      </p>
    </div>
  );
};
