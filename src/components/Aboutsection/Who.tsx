import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Who = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.log("Video autoplay failed:", error));
    }
  }, [])

  return (
    <section className="px-4 py-12" id="whoarewe">
      {/* Title and Heading */}
      <div className="text-center">
        <motion.h3 
          className="text-secondary font-lora font-bold text-base sm:text-lg"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h3>
        <motion.h2 
          className="text-navy-900 font-raleway text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Who Are We?
        </motion.h2>
      </div>

      {/* Main Content */}
      <motion.div 
        className="mt-8 sm:mt-16 md:mt-20 mb-8 sm:mb-16 md:mb-20 flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Image on Left */}
        <motion.div 
          className="md:w-1/2 w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >

        <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl z-20 relative">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/BFS-intro-video.mp4" type="video/mp4" />
          </video>
        </div>
        </motion.div>

        {/* Text Content on Right */}
        <div className="md:w-1/2 w-full space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-roboto text-lg sm:text-xl font-bold text-sky-600">About Us</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-1 sm:mt-2">
              At VS Pharmatech, we are pioneers in the field of Blow-Fill-Seal (BFS) technology, 
              providing world-class machines, molds, and services for aseptic packaging. 
              With years of expertise and a commitment to excellence, we have established 
              ourselves as a trusted partner for pharmaceutical and healthcare manufacturers worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-roboto text-lg sm:text-xl font-bold text-sky-600">Our Vision</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-1 sm:mt-2">
              Our vision is to drive innovation in aseptic manufacturing, ensuring the 
              highest standards of product quality and safety. We aim to continue leading 
              the BFS industry by integrating cutting-edge technology with sustainable practices.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Who

