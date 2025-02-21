import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MainButton from "../ui/Mainbutton";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect for background
  const bgY = useTransform(scrollY, [0, 500], ["0%", "-25%"]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Video autoplay failed:", error));
    }
  }, []);

  return (
    <motion.section
      className="relative w-full mb-8 overflow-hidden flex flex-col items-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/bg-hero.png)", height: "90%", y: bgY }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl pt-12 sm:pt-20 pb-8 sm:pb-12">
        {/* Certification Logos */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 mb-1 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="/iso-logo.svg"
            alt="ISO Certification"
            className="h-12 sm:h-16"
          />
          <img
            src="/ce-logo.svg"
            alt="CE Certification"
            className="h-12 sm:h-16"
          />
        </motion.div>

        {/* Company Description */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img src="CornA.svg" className="h-12 w-auto mr-2" alt="decorative" />
          <h2 className="text-white/90 text-sm sm:text-base font-roboto font-semibold">
            An ISO & CE Compliance Company
          </h2>
          <img src="CornB.svg" className="h-12 w-auto ml-2" alt="decorative" />
        </motion.div>

        {/* Animated Main Title */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-raleway font-bold mb-2 sm:mb-4 bg-white bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          VS PHARMATECH
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl font-roboto font-normal text-white mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          BFS Technology Specialist
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <MainButton href="/about">Learn More About Us</MainButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <MainButton href="/products" variant="secondary">
              Explore Our Products
            </MainButton>
          </motion.div>
        </div>

        {/* Video Section */}
        <div className="max-w-lg sm:max-w-3xl md:max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl z-20 relative">
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="./Introvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.section>
  );
}
