import React from "react";
import MainButton from "../ui/Mainbutton";

const BrochureCta: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center text-center px-6 py-16 md:py-20"
      style={{
        backgroundImage: "url('/bg-brochure.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-raleway font-semibold text-white max-w-5xl mx-auto leading-relaxed sm:leading-snug md:leading-tight">
        Want to Enhance Your Manufacturing with Advanced BFS Machines?
      </h2>
      <p className="text-gray-400 mt-3 sm:mt-4 max-w-3xl text-base sm:text-lg md:text-xl">
        Learn more about our solutions, values, and offerings. Download our
        brochure to explore how we can help you achieve success.
      </p>
      
      <MainButton href="https://drive.google.com/file/d/1q-kOb7o_YZokTURcbR4-KjsfDl2Bj-0p/view?usp=sharing" variant="primary" className="gap-2 mt-6 sm:mt-8">
        Download Our Brochure
        <img src="/ArrowF.svg" alt="Arrow" className="w-4 sm:w-5" />
      </MainButton>
    </section>
  );
};

export default BrochureCta;

