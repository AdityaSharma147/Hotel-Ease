import HotelList from "../components/HotelList";
import { Footer } from "../components/Footer.jsx";
import { Hero } from "../components/Hero.jsx";
import { Bookingbar } from "../components/Searchbar.jsx";
import Facilities from "../components/Facilities.jsx";

const Homepage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Bookingbar />
      <HotelList limit={6} />
      <Facilities />
      <Footer />
    </div>
  );
};

export default Homepage;
