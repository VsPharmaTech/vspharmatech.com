
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const material = {
  title: "Our BFS Machines",
  headline: "Material of Construction",
  points: [
    "Machine Frame: SS304",
    "Safety Panels & Locking Units: SS304",
    "Filling Unit & Filling Nozzles: SS316L",
    "CIP/SIP, Product Contact Pipes: SS316L",
    "All such parts with Product contact: SS316L",
    "All such parts with NO Product contact: SS304",
    "Moulds: Aluminium Bronze",
    "PLC Siemens S7 / Scada system",
    "Servo System",
    "Servos Hydraulic System",
    "Filters",
    "Parison Head: HDS Hardened",
  ],
};

export default function Material() {
  const ref = useRef(null);
  const isInView = useInView(ref, {});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Added delay to stagger children's animation
        staggerChildren: 0.2, // Stagger each child element's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full py-12 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12">
        {/* Right: Content (Appears first on mobile) */}
        <div className="md:w-1/2 w-full space-y-8" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="text-secondary font-lora font-bold text-base sm:text-lg">{material.title}</h4>
            <h2 className="text-2xl sm:text-4xl font-raleway font-bold text-navy-900 mt-2">{material.headline}</h2>
          </motion.div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-gray-700 font-roboto text-base sm:text-lg font-normal space-y-3"
          >
            {material.points.map((point, index) => (
              <motion.li variants={itemVariants} key={index} className="flex items-start">
                <span className="text-blue-600 font-roboto font-semibold mr-2">{index + 1}.</span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Left: Image (Moves below content on mobile) */}
        <div className="md:w-1/2 w-full self-start">
          <motion.img
            src="/MachineM.png"
            alt="BFS Machine"
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
}
