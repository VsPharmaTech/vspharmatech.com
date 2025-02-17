
import { motion } from "framer-motion";

const services = [
  {
    icon: "/Refurbish.png",
    title: "Machine Refurbishment & Upgradation",
    description:
      "We specialize in upgrading and refurbishing BFS machines of any make or model to extend their operational life and enhance performance.",
  },
  {
    icon: "/TechAssist.png",
    title: "Diagnostics & Technical Assistance",
    description:
      "Our advanced HMI and SCADA systems enable remote monitoring and diagnostics, allowing us to quickly address issues and optimize performance.",
  },
  {
    icon: "/AMC.png",
    title: "Annual Maintenance Contracts (AMC’s)",
    description:
      "Our AMC plans ensure your machines receive regular maintenance and dedicated expert attention, keeping them in peak condition, extending their lifespan.",
  },
  {
    icon: "/Train.png",
    title: "Machine Installation and Training",
    description:
      "We provide end-to-end support to get your BFS machines up & running and equip you with the skills to operate and maintain BFS machines effectively.",
  },
];

export default function SHero() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-8 mb-6 sm:mb-8 overflow-hidden bg-white">
      {/* Background Gradient */}
      <img
        src="/background-gradient.png"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <motion.span
          className="inline-block text-sky-600 bg-white border-2 border-sky-600 px-4 sm:px-6 py-2 sm:py-2 font-raleway text-sm sm:text-base font-bold uppercase tracking-wide rounded-full mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Services
        </motion.span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold text-slate-900 leading-tight mb-2">
          Maximize the potential of your Aseptic Manufacturing Systems
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Your Partner in Installation, Maintenance, and Beyond...
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 md:mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center transition-transform duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={service.icon} alt={service.title} className="mx-auto mb-2 sm:mb-4 h-12 w-12 sm:h-16 sm:w-16" />
            <h3 className="text-lg font-raleway font-semibold text-navy-900">{service.title}</h3>
            <p className="text-gray-500 font-lato text-base tracking-wide mt-2">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
