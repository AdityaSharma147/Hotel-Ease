import heroImg from "../assets/Luxury_5.jpg";

export const Hero = () => {
  return (
    <img
      src={heroImg}
      alt="Los Angeles"
      className="block w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] object-cover"
    />
  );
};
