
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageSrc, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl"
    >
      <div className="relative w-full h-60 overflow-hidden">
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-semibold text-navy-900">{title}</h3>
        <a href={link} className="text-blue-600 text-lg font-roboto font-bold mt-2 inline-flex items-center gap-x-1">
          Explore
          <img src="/NextPage.png" alt="Arrow" className="h-4 w-4" />
        </a>
        
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-b from-blue-100 to-white py-12 sm:py-16 px-6"
    >
      <div className="max-w-6xl text-center mx-auto">
      <h2 className="text-base sm:text-lg font-lora font-bold text-secondary">Our Products</h2>
        <h2 className="text-3xl sm:text-4xl font-raleway font-bold text-navy-900 text-center mt-2 mb-12 sm:mb-20">
          Our <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold"> Cutting-Edge </span>BFS Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard
            title="(BFS) Blow-Fill-Seal Machines"
            imageSrc="/Products1.png"
            link="/products/#BfsMachines"
          />
          <ProductCard
            title="(BFS) Moulds & Spare Parts"
            imageSrc="/Products2.png"
            link="/products/#BfsMoulds"
          />
          <ProductCard
            title="Finished Products"
            imageSrc="/Products3.png"
            link="/products/#FinishedProducts"
          />
        </div>
      </div>
    </motion.section>
  );
}
