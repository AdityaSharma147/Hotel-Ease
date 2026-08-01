import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import BGImg from "../assets/Luxury.jpg";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="relative w-full min-h-screen font-serif text-center">
      <img
        src={BGImg}
        alt="Hotel Ease luxury background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="relative z-10 pt-32 pb-16 px-4">
        <h1 className="text-4xl font-bold p-4 text-white">Contact Us</h1>
        <p className="max-w-xl mx-auto text-gray-200 mb-10">
          Have a question or want to make a reservation? Reach out and our team
          will get back to you shortly.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          <div className="bg-amber-200 rounded-lg p-6 flex flex-col gap-6 lg:w-1/3 text-left">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt size={22} className="text-[#C27E35]" />
              <span>Alwar, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone size={20} className="text-[#C27E35]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={20} className="text-[#C27E35]" />
              <span>contact@hotelease.com</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 lg:w-2/3 text-left bg-white rounded-lg p-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-4 py-3 border-2 border-[#C27E35] rounded-md outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-4 py-3 border-2 border-[#C27E35] rounded-md outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="px-4 py-3 border-2 border-[#C27E35] rounded-md outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-[#C27E35] text-white font-semibold py-3 rounded-md hover:bg-[#1a1a2e] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
