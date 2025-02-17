
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Bfsabout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("bfs-about");
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
      id="bfs-about"
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

          {/* Heading */}
          <div className="relative z-10">
            <h2 className="text-base sm:text-lg font-lora font-bold text-secondary mb-2 sm:mb-3">Our Technology</h2>
            <h3 className="text-2xl sm:text-3xl font-raleway font-semibold text-primary">
              Advancing Blow-Fill-Seal<br />
              (BFS) Technology with<br />
              Innovation & Precision
            </h3>
          </div>
        </div>

        {/* Right Column: Description and List */}
        <div>
          <p className="text-gray-800 font-lato text-base sm:text-lg mb-3 sm:mb-4">
          At V S Pharmatech, we are committed to revolutionizing Blow Fill Seal (BFS) Technology with state-of-the-art innovations. Our expertise lies in designing and engineering high-performance{" "}
            <span className="font-semibold">BFS MACHINES & MOULDS</span> for{" "}
            <span className="font-semibold">LARGE & SMALL VOLUME PARENTERALS</span> that meet global industry standards.{" "}
          </p>
          <ul className="list-decimal pl-6 font-lato text-base sm:text-lg text-gray-800 mb-6 sm:mb-12">
            <li>We integrate the latest technological advancements to enhance BFS efficiency.</li>
            <li>Our machines and moulds ensure optimal performance and product safety.</li>
            <li>We continuously refine our technology to meet evolving industry needs.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
