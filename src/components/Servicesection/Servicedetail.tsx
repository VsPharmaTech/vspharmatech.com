
import { motion } from "framer-motion";
import MainButton from "../ui/Mainbutton";

interface ServiceDetailProps {
  title: string;
  heading: string;
  description: string;
  imageSrc: string;
  points: string[];
}

export default function ServiceDetail({
  title,
  heading,
  description,
  imageSrc,
  points,
}: ServiceDetailProps) {
  return (
    <motion.section
      className="relative py-4 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2, delayChildren: 0.1 }} 
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        
        {/* Left Side Image */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-cover rounded-xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div className="text-left">
          <motion.span
            className="text-secondary font-semibold uppercase text-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.span>
          
          <motion.h2
            className="text-2xl sm:text-4xl font-bold text-navy-900 mt-1 sm:mt-2"
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

          {/* Points List with Animation */}
          <motion.ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            {points.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-2 sm:space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src="/Checkmark.png"
                  alt="Check"
                  className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
                  whileHover={{ scale: 1.2 }}
                />
                <span className="text-gray-700 text-base sm:text-lg font-medium">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Button Animation */}
          <motion.div
            className="mt-6 sm:mt-8 flex justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <MainButton href="/contact/#contactform" variant="primary" className="gap-2">
              Get a quote
              <img src="/ArrowF.svg" alt="Arrow" className="w-4 sm:w-5" />
            </MainButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

