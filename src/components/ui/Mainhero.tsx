import { useEffect } from "react";
import { motion } from "framer-motion";
import TitleTag from "./Titletags";

interface MainHeroProps {
  title: string;
  heading: string;
  description: string;
  scrollToId: string;
}

export default function MainHero({ title, heading, description, scrollToId }: MainHeroProps) {
  useEffect(() => {
    const handleScroll = () => {
      document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
    };

    const downButton = document.getElementById("down-button");
    if (downButton) downButton.addEventListener("click", handleScroll);

    return () => {
      if (downButton) downButton.removeEventListener("click", handleScroll);
    };
  }, [scrollToId]);

  return (
    <section
      className="relative flex flex-col items-center text-center w-full py-20 sm:py-24 px-6 sm:px-8 mb-20 sm:mb-40"
      style={{ backgroundImage: `url('/background-gradient.png')`, backgroundSize: "cover", backgroundPosition: "top" }}
    >
      {/* TitleTag component */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TitleTag text={title} />
      </motion.div>

      {/* Heading & Description */}
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-3xl sm:text-5xl font-raleway font-bold text-slate-900 leading-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {heading}
        </motion.h1>

        <motion.p
          className="text-gray-600 text-base sm:text-lg mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Scroll Down Button (Placing it at the bottom center of the background) */}
      <motion.button
        id="down-button"
        className="absolute bottom-[-24px] flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-blue-600 
                   hover:bg-indigo-800 transition-all duration-300 shadow-lg border-2 border-blue-600 
                   hover:shadow-blue-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src="/Jump-Arrow.png"
          alt="Scroll Down"
          className="w-10 h-10 sm:w-14 sm:h-14 opacity-80"
        />
      </motion.button>
    </section>
  );
}
