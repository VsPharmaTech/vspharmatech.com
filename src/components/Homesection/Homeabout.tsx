
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-us");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about-us"
      className="py-8 sm:py-12 bg-white relative overflow-hidden flex justify-center items-center px-6 sm:px-40"
    >
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Column: Title */}
        <div className="text-left relative">
          {/* Decorative Bubbles */}
          {/* <div className="absolute left-0 bottom-0 w-full h-full z-0 opacity-50">
            <img src="/bubbles.svg" alt="Decorative bubbles" className="w-40 object-cover" />
          </div> */}

          {/* Heading */}
          <div className="relative z-10">
            <h2 className="text-base sm:text-lg font-lora font-bold text-secondary mb-2 sm:mb-3">About Us</h2>
            <h3 className="text-2xl sm:text-3xl font-raleway font-semibold text-primary">
              Manufacturers and <br />
              Exporters of High-Quality <br />
              BFS Machines & Moulds
            </h3>
          </div>
        </div>

        {/* Right Column: Description and List */}
        <div>
          <p className="text-gray-800 font-lato text-base sm:text-lg mb-4">
            V S Pharmatech is committed to providing high-quality products and services related to{" "}
            <span className="font-semibold">BLOW FILL SEAL TECHNOLOGY</span> systems. We specialize in{" "}
            <span className="font-semibold">BFS MACHINES & MOULDS</span> for{" "}
            <span className="font-semibold">LARGE & SMALL VOLUME PARENTERALS</span>:
          </p>
          <ul className="list-decimal pl-6 font-lato text-base sm:text-lg text-gray-800 mb-8 sm:mb-12">
            <li>Known for providing best-in-class products and services.</li>
            <li>Committed to providing in-time delivery.</li>
            <li>Best understands the requirement of users.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
