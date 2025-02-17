
import { motion } from "framer-motion";

interface LBfsWorkingProps {
  title: string;
  heading: string;
  description: string;
  videoSrc: string; // Updated from imageSrc to videoSrc
}

export default function LBfsWorking({
  title,
  heading,
  description,
  videoSrc,
}: LBfsWorkingProps) {
  return (
    <motion.section
      className="relative py-8 sm:py-16 md:py-20 px-4 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        

        {/* Right Side Content */}
        <motion.div className="text-left">
          <motion.span
            className="text-secondary font-semibold uppercase text-sm sm:text-base"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.span>
          
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-navy-900 mt-1 sm:mt-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>

          <motion.p
            className="mt-2 sm:mt-4 text-gray-600 text-base sm:text-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>

         {/* Left Side Video */}
         <motion.div
          className="relative rounded-xl overflow-hidden shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
