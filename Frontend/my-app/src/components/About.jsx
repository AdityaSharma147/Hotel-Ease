import React from "react";
import { Link } from "react-router-dom";
import BGImg from "../assets/Luxury.jpg";
import {
  FaHotel,
  FaSpa,
  FaUtensils,
  FaSwimmingPool,
  FaWifi,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 font-serif">
      <img
        src={BGImg}
        alt="Luxury Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl bg-white/10 backdrop-blur-md border border-amber-400 rounded-2xl p-10 md:p-16 text-white shadow-2xl">
        <p className="uppercase tracking-[8px] text-amber-400 text-sm">
          Luxury • Comfort • Elegance
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8">
          About Hotel Ease
        </h1>

        <p className="text-lg leading-9 text-gray-200">
          Welcome to{" "}
          <span className="text-amber-400 font-semibold">Hotel Ease</span>,
          Alwar's destination for luxury hospitality. Inspired by Rajasthan's
          royal heritage, we blend timeless elegance with modern comfort to
          create unforgettable experiences for every guest.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <h2 className="text-2xl text-amber-400 mb-4">Our Story</h2>

            <p className="leading-8 text-gray-300">
              Every room, every meal, and every interaction is crafted with
              exceptional attention to detail. Whether you're visiting for
              business, a family vacation, or a romantic getaway, Hotel Ease
              promises refined comfort and world-class hospitality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-amber-400 mb-6">Luxury Amenities</h2>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaHotel className="text-amber-400 text-2xl" />
                Luxury Suites
              </div>

              <div className="flex items-center gap-4">
                <FaUtensils className="text-amber-400 text-2xl" />
                Fine Dining
              </div>

              <div className="flex items-center gap-4">
                <FaSpa className="text-amber-400 text-2xl" />
                Spa & Wellness
              </div>

              <div className="flex items-center gap-4">
                <FaSwimmingPool className="text-amber-400 text-2xl" />
                Infinity Pool
              </div>

              <div className="flex items-center gap-4">
                <FaWifi className="text-amber-400 text-2xl" />
                High-Speed Wi-Fi
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl text-amber-400">★★★★★</h3>

          <p className="italic mt-4 text-xl text-gray-200">
            "Where Every Stay Becomes a Cherished Memory."
          </p>

          <Link
            to="/rooms"
            className="inline-block mt-8 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Explore Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
