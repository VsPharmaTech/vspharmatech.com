
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

const steps: ProcessStep[] = [
  {
    title: "Extrusion",
    description: "Plastic granules are melted and formed into a hot hollow pipe of molten plastic (parison).",
    icon: "/Extrusion.svg",
  },
  {
    title: "Blow",
    description: "The parison is enclosed in a mould, and sterile compressed air shapes it into the desired container.",
    icon: "/Blow.svg",
  },
  {
    title: "Fill",
    description: "Liquid product is sterilely filled into the formed containers using sterile filling nozzles.",
    icon: "/Fill.svg",
  },
  {
    title: "Seal",
    description: "The top of the container is hermetically sealed, ensuring product sterility and tamper resistance.",
    icon: "/Seal.svg",
  },
  {
    title: "De-flashing",
    description: "Excess material (flash) is trimmed away, leaving a perfectly formed, ready-to-use container.",
    icon: "/De-flash.svg",
  },
];

// Curved Arrow Component with Animation
const ArrowSVG = ({ delay }: { delay: number }) => (
  <motion.img
    src="/Curvyarrow.png"
    alt="Curved arrow"
    className="w-16 opacity-0 lg:block hidden"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
  />
);

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-30 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary font-lora font-bold text-base md:text-lg pb-2 px-8 sm:px-12 md:px-20"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-900 font-raleway text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3"
          >
            Our Streamlined BFS Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto pb-6 sm:pb-8 md:pb-10 mt-2 sm:mt-3"
          >
            From container formation to sealing, our Blow-Fill-Seal technology ensures unmatched quality in aseptic manufacturing.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {/* Step Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.4 }}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-blue-400 mb-4 sm:mb-5 md:mb-6 flex items-center justify-center relative"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.4 }}
                  className="absolute inset-0 rounded-full border-4 border-blue-200 animate-pulse"
                />
                <img
                  src={step.icon}
                  alt={`${step.title} process`}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                />
              </motion.div>

              {/* Step Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.4 }}
              >
                <h3 className="text-lg sm:text-xl font-raleway font-bold text-navy-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-600 font-roboto font-normal text-base">{step.description}</p>
              </motion.div>

              {/* Animated Curved Arrow Between Steps (Only on Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 right-0 transform translate-x-6 -translate-y-1/2">
                  <ArrowSVG delay={0.6 + index * 0.4} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
