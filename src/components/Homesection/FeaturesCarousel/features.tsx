"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import type { Feature } from "./types.ts";
import { features } from "./features-data.ts";

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [maxScrollX, setMaxScrollX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate max scrollable width
  useEffect(() => {
    const updateMaxScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollEl = scrollContainerRef.current;
      const containerWidth = scrollEl.offsetWidth;
      const scrollWidth = scrollEl.scrollWidth;
      const maxScroll = scrollWidth - containerWidth;
      setMaxScrollX(-Math.max(0, maxScroll));
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, maxScrollX]);
  const progressBarWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const FeatureCard = ({ feature }: { feature: Feature }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleTouch = () => setIsExpanded((prev) => !prev);
    const handleMouseEnter = () => !isMobile && setIsHovered(true);
    const handleMouseLeave = () => !isMobile && setIsHovered(false);

    return (
      <div
        className="relative flex-shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[360px] rounded-xl overflow-hidden group"
        onTouchStart={handleTouch}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ touchAction: "pan-y" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 transition-opacity duration-300" />
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300">
          <h3 className="text-white text-sm sm:text-base md:text-xl font-semibold">
            {feature.title}
          </h3>
        </div>

        {(isExpanded || (!isMobile && isHovered)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 bg-gradient-to-tl from-indigo-500 to-indigo-950 p-4 sm:p-6 flex flex-col justify-center items-center text-center text-primary-foreground"
          >
            <h3 className="text-white font-raleway text-xl md:text-2xl font-bold mb-2 sm:mb-4">
              {feature.title}
            </h3>
            <p className="text-white font-roboto text-base leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <section className="relative w-full h-[400vh]" ref={scrollRef}>
      {/* Sticky content that scrolls horizontally */}
      <div className="sticky top-0 h-screen flex flex-col justify-center bg-gradient-to-b from-white to-blue-100 overflow-hidden">
        {/* Progress Bar */}
        <motion.div
          style={{ scaleX: progressBarWidth }}
          className="origin-left h-[4px] bg-blue-600 w-full fixed top-0 left-0 z-50"
        />

        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h4 className="text-secondary font-lora font-bold text-base sm:text-lg">
            Salient Features
          </h4>
          <h2 className="text-navy-900 font-raleway font-bold text-3xl sm:text-4xl md:text-5xl mt-2 sm:mt-3">
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold">
              Innovative Features
            </span>{" "}
            That Define our Excellence
          </h2>
          <p className="text-gray-600 font-normal text-base sm:text-lg max-w-3xl mx-auto mt-2 sm:mt-3">
            Our BFS systems combine advanced engineering and practical design to
            redefine the standards of aseptic manufacturing.
          </p>
        </div>

        {/* Card container with dynamic horizontal scroll */}
        <motion.div
          className="flex gap-6 mx-6"
          ref={scrollContainerRef}
          style={{ x }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
