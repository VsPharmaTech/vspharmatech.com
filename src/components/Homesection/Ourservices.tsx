import Button from "../ui/CustomButton";
import ServiceCard from "../ui/Servicecard";
import { motion } from "framer-motion";

const services = [
  {
    icon: "/Refurbish.png",
    title: "Machine Refurbishment & Upgradations",
    description:
      "We specialize in upgrading and refurbishing BFS machines of any make or model to extend their operational life and enhance performance.",
  },
  {
    icon: "/TechAssist.png",
    title: "Diagnostics & Technical Assistance",
    description:
      "Our advanced HMI and SCADA systems enable remote monitoring & diagnostics, allowing us to quickly address issues and optimize performance.",
  },
  {
    icon: "/AMC.png",
    title: "Annual Maintenance Contracts (AMC's)",
    description:
      "Our AMC plans ensure your machines receive regular maintenance & dedicated expert attention, keeping them in peak condition, extending their lifespan.",
  },
  {
    icon: "/Train.png",
    title: "Machine Installation and Training",
    description:
      "We provide end-to-end support to get your BFS machines installed and equip you with the essential skills to operate & maintain BFS machines effectively.",
  },
];

export default function OurServices() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-30 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-hidden">
      <img
        src="bg-gradient-u.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      <motion.div
        className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Column - Text Content */}
        <motion.div
          className="lg:w-1/2 lg:pr-12 mb-8 sm:mb-10 px-4 md:mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-secondary font-lora font-bold text-base sm:text-lg">
            Our Services
          </h2>
          <h3 className="text-navy-900 font-raleway text-2xl sm:text-4xl font-bold mt-2 sm:mt-3">
            Maximize the potential of your BFS Technology
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-2 sm:mt-3 mb-6 sm:mb-8">
            At VS Pharmatech, we pride ourselves on delivering not only
            high-quality Blow-Fill-Seal (BFS) machines and moulds but also a
            comprehensive suite of services designed to support your
            manufacturing operations. Our expertise ensures that your systems
            run smoothly, efficiently, and reliably throughout their lifecycle.
          </p>
          <Button href="/services" variant="primary">Explore Our Services</Button>
        </motion.div>

        {/* Right Column - Service Cards Grid */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
