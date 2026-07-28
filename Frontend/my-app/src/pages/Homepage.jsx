import HotelList from "../components/HotelList";
import { Footer } from "../components/Footer.jsx";
import { Hero } from "../components/Hero.jsx";
import { Bookingbar } from "../components/Bookingbar.jsx";
import Facilities from "../components/Facilities.jsx";

const Homepage = () => {
  return (
    <div className="absolute top-0">
      <Hero />
      <Bookingbar />
      <HotelList />
      <Facilities />
      <Footer />
    </div>
  );
};

export default Homepage;
