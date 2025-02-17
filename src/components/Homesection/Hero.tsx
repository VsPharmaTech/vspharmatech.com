
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import MainButton from "../ui/Mainbutton";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;

  // Parallax effect for background
  const bgY = useTransform(scrollY, [0, 500], ["0%", "-25%"]);

  // Parallax effect for background (Disabled on touch devices)
  // const bgY = isTouchDevice ? "0%" : useTransform(scrollY, [0, 500], ["0%", "-30%"]);

  // Mouse-following effect (Disabled on touch devices)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isTouchDevice) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.log("Video autoplay failed:", error));
    }
  }, []);

  return (

    
    <section
      className="w-full mb-8 overflow-hidden flex flex-col items-center text-center px-4 relative" // Added relative here
      onMouseMove={handleMouseMove}
    >


      {/* Background with Parallax Effect */}

      <motion.div
        className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/bg-home.png)",
          height: "100%",
          y: bgY,
        }}
      />


      {/* Expanding Concentric Circles */}
      {!isTouchDevice && (
        <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 sm:w-64 md:w-80 border border-white/50 rounded-full blur-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.6, 1.8, 2.2] }}
              transition={{ duration: 6, repeat: Infinity, delay: i * 1.5 }}
            />
          ))}
        </div>
      )}

      {/* Mouse-Following Light Effect */}
      {!isTouchDevice && (
        <motion.div
          className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-blue-500 opacity-20 rounded-full blur-[80px] pointer-events-none"
          style={{ x: springX, y: springY }}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl pt-20 pb-12">
        {/* Certification Logos */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-1 sm:mb-4">
          <img src="/iso-logo.svg" alt="ISO Certification" className="h-12 sm:h-16" />
          <img src="/ce-logo.svg" alt="CE Certification" className="h-12 sm:h-16" />
        </div>

        {/* Company Description */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10">
          <img src="CornA.svg" className="h-12 w-auto mr-2" alt="decorative" />
          <h2 className="text-white/90 text-sm font-roboto font-semibold">
            An ISO & CE Compliance Company
          </h2>
          <img src="CornB.svg" className="h-12 w-auto ml-2" alt="decorative" />
        </div>

        {/* Animated Main Title */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-raleway font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-100 to-teal-100 bg-clip-text text-transparent"
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          VS PHARMATECH
        </motion.h1>

        <p className="text-base sm:text-xl font-roboto font-normal text-white mb-8">
          BFS Technology Specialist
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <motion.div whileHover={{ scale: 1.05 }}>
            <MainButton href="/about">Learn More About Us</MainButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <MainButton href="/products" variant="secondary">
              Explore Our Products
            </MainButton>
          </motion.div>
        </div>

        {/* Video Section */}
        <div className="max-w-lg sm:max-w-3xl md:max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl z-20 relative">
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
    </section>
  );
}
