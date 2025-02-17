import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const values = [
  {
    title: "Innovation",
    description: "Driving Progress with our BFS Technology Solutions",
    icon: "/Value1.png",
  },
  {
    title: "Quality",
    description: "Committed to deliver Excellence in everything we do ",
    icon: "/Value3.png",
  },
  {
    title: "Integrity",
    description: "Building Trust by ensuring Excellence and Reliability",
    icon: "/Value4.png",
  },
  {
    title: "Collaboration",
    description: "Achieving more together through Teamwork & Synergy",
    icon: "/Value2.png",
  },
  {
    title: "Customer Focus",
    description: "Customer centric approach. Your Success is Our Priority",
    icon: "/Value5.png",
  },
  {
    title: "Sustainability",
    description: "Eco-friendly production to minimize environmental impact.",
    icon: "/Value6.png",
  },
];

const Values = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 md:px-20 mt-6 sm:mt-10 mb-6 sm:mb-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title, Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-secondary font-lora text-base sm:text-lg font-bold">Our Core Values</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-raleway font-bold text-navy-900 mt-2 sm:mt-3">
            Core Values: <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold"> Our Commitment </span>to Excellence
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2 sm:mt-3">
            Your Trusted Partner for Advanced Blow-Fill-Seal (BFS) Solutions
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 mt-12 sm:mt-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl shadow-lg bg-white transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              <div
                className={`flex items-center justify-center`}
              >
                <img src={value.icon} alt={value.title} className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h4 className="text-xl font-semibold text-blue-700 mt-3 sm:mt-4">
                {value.title}
              </h4>
              <p className="text-gray-600 text-base mt-1 sm:mt-2">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
