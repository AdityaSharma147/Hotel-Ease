import HotelList from "../components/HotelList";
import { Footer } from "../components/Footer.jsx";
import { Hero } from "../components/Hero.jsx";
import { Bookingbar } from "../components/Searchbar.jsx";
import Facilities from "../components/Facilities.jsx";
import About from "../components/About";

const Homepage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Bookingbar />
      <HotelList limit={6} />
      <Facilities />
      <About />
      <Footer />
    </div>
  );
};

export default Homepage;
