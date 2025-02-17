import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const advantages = [
  {
    title: "Innovative Systems",
    description:
      "Our BFS machines incorporate the latest advancements in aseptic manufacturing to ensure unparalleled precision and reliability.",
    icon: "Adv1.png",
  },
  
  {
    title: "Tailored Solutions",
    description:
      "We offer fully customizable BFS machines and molds to fit your exact specifications and deliver solutions tailored to your goals.",
    icon: "/Adv3.png",
  },
  {
    title: "Global Compliance",
    description:
      "Our products adhere to international standards, including ISO, cGMP, and CE certifications, ensuring sterility, safety, and quality.",
    icon: "/Adv4.png",
  },
  
  
  {
    title: "Comprehensive Support",
    description:
      "From installation to maintenance, our dedicated team offers end-to-end support to ensure the seamless operation of your BFS systems.",
    icon: "Adv2.png",
  },
];

const Advantage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title, Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-secondary text-base sm:text-lg font-lora font-bold">Why Choose Us?</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-raleway font-bold text-navy-900 mt-3">
            The <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold"> VS Pharmatech </span> Advantage
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2 sm:mt-3">
            Your Trusted Partner for Advanced Blow-Fill-Seal (BFS) Solutions
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 px-2 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <img
              src="/MachineBg.png"
              alt="VS Pharmatech BFS Machine"
              className="rounded-lg shadow-lg w-full"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </motion.div>

          {/* Right Side - Grid Advantages */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="flex flex-col items-start p-5 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300"
              >
                <img
                  src={adv.icon}
                  alt={adv.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4"
                />
                <h4 className="text-xl font-semibold text-slate-900">
                  {adv.title}
                </h4>
                <p className="text-gray-700 text-base mt-1">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;