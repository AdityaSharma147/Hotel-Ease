import React from "react";
import BGImg from "../assets/Luxury.jpg";

const About = () => {
  return (
    <div className="relative w-full min-h-screen font-serif text-center">
      <img
        src={BGImg}
        alt="Hotel Ease luxury background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="relative z-10 pt-32 pb-16 px-4">
        <div className="bg-amber-200 m-4 sm:m-16 p-6 font-bold tracking-widest rounded-lg">
          <h1 className="text-4xl p-4 text-white font-bold">About Us</h1>
          Welcome to Hotel Ease, Alwar's epitome of refined luxury and timeless
          elegance. Nestled in the heart of Rajasthan, our hotel offers an
          unparalleled sanctuary where sophistication meets comfort, creating an
          experience unlike any other. A Legacy of Luxury: At Hotel Ease, we
          redefine hospitality with meticulous attention to every detail. From
          our elegantly appointed rooms and suites to thoughtfully curated
          interiors, every corner reflects a commitment to excellence and
          aesthetic grace. Exquisite Experiences: Indulge in world-class dining,
          where gourmet cuisine pays homage to both global and local flavors.
          Our spa and wellness centers provide a serene escape, blending
          traditional Rajasthani therapies with contemporary rejuvenation
          techniques. For those seeking adventure, curated excursions and
          bespoke experiences unveil the region's rich cultural heritage and
          natural splendor. Impeccable Service: Our team of dedicated
          professionals embodies the art of personalized service, anticipating
          every need to ensure your stay is seamless and memorable. Whether for
          business, leisure, or special occasions, Hotel Ease promises an
          ambiance of tranquility and sophistication. Unforgettable Moments:
          From grand celebrations to intimate retreats, every event at Hotel
          Ease is transformed into a cherished memory. Our versatile venues and
          state-of-the-art amenities provide the perfect backdrop for creating
          stories that last a lifetime.
        </div>
      </div>
    </div>
  );
};

export default About;
