import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Darenta</h1>
        <p className="hero__subtitle">
          Find, book, or rent a car - quickly and easily!
        </p>

        <CustomButton />
      </div>
    </div>
  );
};

export default Hero;
