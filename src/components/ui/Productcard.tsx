// src/components/ui/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageSrc, link }) => {
  return (
    <a href={link} className="block rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Explore &#8594;</span>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
