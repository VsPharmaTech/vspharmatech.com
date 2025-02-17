
import { motion } from "framer-motion";
import Modelscene from '../../components/Productsection/Modelscene'

export default function PHero() {
  return (
    <section className="relative pb-6 pt-20 sm:pb-8 sm:pt-24 px-4 sm:px-8 mb-4 sm:mb-8 overflow-hidden bg-white">
      {/* Background Gradient */}
      <img
        src="/background-gradient.png"
        className="absolute inset-0 w-full h-[80%] object-cover"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

{/* <span className="text-blue-600 bg-white border-2 border-blue-600 px-6 py-2 text-lg font-bold uppercase tracking-wide rounded-full">
        {text}
      </span> */}

        <motion.span
          className="inline-block text-sky-600 bg-white border-2 border-sky-600 px-4 sm:px-6 py-2 font-raleway text-sm sm:text-base font-bold uppercase tracking-wide rounded-full mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Products
        </motion.span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold text-slate-900 leading-tight mb-2 max-w-4xl mx-auto">
        Explore Our High-Performance BFS Systems & Machines
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
        Tailored Technology for Small and Large-Scale Production Needs
        </p>
      </motion.div>
      
      
      <div className="relative z-10 flex items-center justify-center min-h-[50vh]">
         <Modelscene/>
      </div>

    </section>
  );
}
