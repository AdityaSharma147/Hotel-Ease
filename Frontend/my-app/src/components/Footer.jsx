import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="  w-full bg-[#C27E35] text-white text-center p-2 border-2">
      <div className="flex flex-col  gap-4 ">
        {/* {topSection} */}
        <div className="grid place-content-center gap-4 text-center">
          <h2 className="text-4xl font-bold">Sign Up For Exclusive Offers</h2>
          <div className="flex items-center justify-center max-w-xl mx-auto w-full">
            <input
              id="701"
              className=" grow px-10 py-4 border-3 border-r-0 border-white rounded-l-full outline-none text-sm "
              type="email"
              placeholder=" Enter your email address"
            />
            <button className=" bg-white  rounded-r-full p-4 text-md text-[#C27E35] border border-white hover:bg-[#1a1a2e] transition-colors font-semibold text-md ">
              Join Now
            </button>
          </div>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-between items-center text-center gap-2 border border-white m-4">
          <h1 className=" text-2xl font-bold">
            ℌ𝔬𝔱𝔢𝔩<span className="text-black">𝔈𝔞𝔰𝔢</span>
          </h1>
          <div className="flex flex-col-2 gap-50 py-4">
            <div className=" gap-3 ">
              <ul className="gap-4">
                <li className="flex p-1">
                  <FaFacebook size={25} className="text-3xl cursor-pointer" />{" "}
                  @HotelEase
                </li>
                <li className="flex p-1">
                  <FaInstagram size={25} className=" cursor-pointer" />
                  @HotelEase
                </li>
                <li className="flex p-1">
                  <FaYoutube size={25} className="text-3xl cursor-pointer" />
                  @HotelEase
                </li>
              </ul>
            </div>
            <div>
              <ul className=" gap-6 justify-center text-base font-medium">
                <li className="cursor-pointer">HOME</li>
                <li className="cursor-pointer">BOOKINGS</li>
                <li className="cursor-pointer">ROOMS</li>
                <li className="cursor-pointer">CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p className=" text-sm w-full">
        &copy; 2026 World Wanderers. All rights reserved.
      </p>
    </div>
  );
};
