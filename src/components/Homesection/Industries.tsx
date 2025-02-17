
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Industry {
  title: string;
  image: string;
  category: "healthcare" | "consumer" | "miscellaneous";
}

const industries: Industry[] = [
  { title: "Ophthalmics", image: "/Healthcare1.png", category: "healthcare" },
  { title: "Injectables", image: "/Healthcare2.png", category: "healthcare" },
  { title: "Infusions", image: "/Healthcare3.png", category: "healthcare" },
  { title: "Inhalation Solutions", image: "/Healthcare4.png", category: "healthcare" },
  { title: "Vitamins & Juices", image: "/Wellness3.png", category: "consumer" },
  { title: "Cosmetics", image: "/Wellness2.png", category: "consumer" },
  { title: "Personal Care", image: "/Wellness4.jpg", category: "consumer" },
  { title: "Nutraceuticals", image: "/Wellness1.png", category: "consumer" },
  { title: "Industrial Lubricants", image: "/Miss1.png", category: "miscellaneous" },
  { title: "Specialty Chemicals", image: "/Miss2.png", category: "miscellaneous" },
  { title: "Adhesives & Sealants", image: "/image10.png", category: "miscellaneous" },
  { title: "Coatings", image: "/image11.png", category: "miscellaneous" },
];

export default function Industries() {
  const [activeCategory, setActiveCategory] = useState<"healthcare" | "consumer" | "miscellaneous">("healthcare");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-hidden">
      <div className="relative z-10 container mx-auto">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="block text-center text-secondary font-lora font-bold text-base sm:text-lg">
          Industries
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-bold text-navy-900 text-center mt-2 sm:mt-3">
          BFS Solutions for your <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold"> Industry Application </span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-600 text-base sm:text-lg text-center max-w-3xl mx-auto mt-2 sm:mt-3 mb-6 sm:mb-8 md:mb-10">
          Delivering Blow-Fill-Seal systems tailored to meet the unique needs of pharmaceutical, consumer wellness, and packaging industries worldwide.
        </motion.p>

        {/* Category Selection */}
        <div className="flex justify-center mt-12 sm:mt-16 mb-6 sm:mb-12">
          {isMobile ? (
            <div className="relative w-full sm:w-auto">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value as "healthcare" | "consumer" | "miscellaneous")}
              >
                {["healthcare", "consumer", "miscellaneous"].map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)} Sector
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <img src="/dropdown.png" alt="Dropdown Arrow" className="w-6 h-6" />
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {["healthcare", "consumer", "miscellaneous"].map((category) => (
                <button
                  key={category}
                  className={`px-3 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-blue-500 text-white shadow-lg scale-105"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-200"
                  }`}
                  onClick={() => setActiveCategory(category as "healthcare" | "consumer" | "miscellaneous")}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)} Sector
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Industry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-4 sm:gap-6 place-items-center lg:px-40 ${isMobile ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}
          >
            {industries
              .filter((industry) => industry.category === activeCategory)
              .slice(0, 4)
              .map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 w-full sm:max-w-xs text-center hover:shadow-lg hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="opacity-0 group-hover:opacity-100 absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center text-white text-sm sm:text-base md:text-lg font-roboto font-semibold leading-relaxed transition-all duration-300">
                    {industry.title}
                  </h3>
                  {isMobile && <div className="absolute inset-0 bg-gradient-to-t from-black/20"> <h3 className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center text-white text-base md:text-lg font-roboto font-semibold leading-relaxed transition-all duration-300">
                    {industry.title}
                  </h3></div>}
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
