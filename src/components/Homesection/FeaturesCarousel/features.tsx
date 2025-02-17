
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";
import type { Feature } from "./types.ts";
import { features } from "./features-data.ts";

export default function Features() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  // Duplicate the features array three times to ensure smooth infinite scroll
  const duplicatedFeatures = [...features, ...features, ...features];

  useEffect(() => {
    const scrollWidth = containerRef.current?.scrollWidth || 0;
    const viewportWidth = containerRef.current?.offsetWidth || 0;
    const scrollDistance = -(scrollWidth / 3); // Scroll one-third of the total width

    const startAnimation = async () => {
      if (isPaused) return;

      await controls.start({
        x: scrollDistance,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      });
    };

    startAnimation();

    return () => {
      controls.stop();
    };
  }, [controls, isPaused]);

  const FeatureCard = ({ feature }: { feature: Feature }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isExpanded = activeFeature === feature.id;

    const handleTouch = () => {
      setActiveFeature((prevActiveFeature) => (prevActiveFeature === feature.id ? null : feature.id));
      setIsPaused(!isExpanded); // Toggle pause state based on expansion
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        className="relative flex-shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[360px] mx-2 sm:mx-4 rounded-xl overflow-hidden group"
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
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300">
          <h3 className="text-white text-sm sm:text-base md:text-xl font-semibold">{feature.title}</h3>
        </div>

        {(isExpanded || isHovered) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 bg-primary p-4 sm:p-6 flex flex-col justify-center items-center text-center text-primary-foreground"
          >
            <h3 className="text-white font-raleway text-xl md:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
            <p className="text-white font-roboto text-base leading-relaxed">{feature.description}</p>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-blue-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h4 className="text-secondary font-lora font-bold text-base sm:text-lg">Salient Features</h4>
          <h2 className="text-navy-900 font-raleway font-bold text-3xl sm:text-4xl md:text-5xl mt-2 sm:mt-3">
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold"> Innovative Features </span> That Define our Excellence
          </h2>
          <p className="text-gray-600 font-normal text-base sm:text-lg max-w-3xl mx-auto mt-2 sm:mt-3">
            Our BFS systems combine advanced engineering and practical design to redefine the standards of aseptic manufacturing.
          </p>
        </div>

        {/* Features Carousel */}
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            animate={controls}
            style={{ x: 0 }} // Reset initial position
          >
            {duplicatedFeatures.map((feature, index) => (
              <FeatureCard key={`${feature.id}-${index}`} feature={feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
