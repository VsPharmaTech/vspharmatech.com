
// src/components/Productsection/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ProductDetailProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  tableData: { header: string[]; rows: string[][] };
  galleryImages: string[];
  imageTitle: string[];
  additionalDescription?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  description,
  imageSrc,
  features,
  tableData,
  galleryImages,
  imageTitle,
  additionalDescription = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg sm:mx-auto max-w-auto lg:max-w-4xl p-6 md:p-8" data-aos="fade-up">
      {/* Background Gradient */}
      <img
        src="/Background-gradient-u.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ zIndex: -1 }}
      />

      <div className="relative">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-raleway font-bold text-slate-900 mt-2">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {/* Image */}
          <div className="rounded-lg overflow-hidden h-full md:h-[250px] lg:h-[300px] w-full object-contain">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description and Features */}
          <div>
            <p className="text-gray-700 font-raleway text-sm sm:text-base mb-2">{description}</p>
            <p className="text-gray-700 font-raleway text-sm sm:text-base mb-4 sm:mb-8">{additionalDescription}</p>
            <ul className="list-none pl-0">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start mb-2 sm:mb-3">
                  <img
                    src="/Checkmark.png"
                    alt="tick"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  <span className="text-gray-700 font-raleway text-sm sm:text-base font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-start mt-4 sm:mt-6 space-x-2 sm:space-x-4">
          <button
            onClick={toggleExpanded}
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 sm:px-6 rounded transition-colors duration-300 hover:shadow-md text-base"
          >
            {isExpanded ? 'View Less' : 'View Details'}
            <img
              src={isExpanded ? '/Double-ArrowU.png' : '/Double-ArrowD.png'}
              alt="arrow"
              className={`w-4 h-4 ml-1 sm:ml-2 transform transition-transform duration-300`}
            />
          </button>
          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 sm:px-6 rounded transition-colors duration-300 hover:shadow-md text-base">
            Get a Quote
            <img src="/Chatcloud.svg" alt="arrow" className="w-4 h-4 ml-1 sm:ml-2" />
          </button>
        </div>

        {/* Expanded Section */}
        <div
          className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[2000px]' : 'max-h-0'
          }`}
        >
          {/* Table */}
          {tableData && (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr>
                    {tableData.header.map((header, index) => (
                      <th
                        key={index}
                        className="border border-white py-1 px-3 sm:py-3 bg-slate-400 text-white text-center font-roboto font-semibold leading-relaxed text-sm"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-gray-200 px-3 py-3 bg-white text-navy-900 text-center font-roboto tracking-tight text-sm"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="flex flex-wrap justify-center mt-6 -mx-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="w-1/3 lg:w-1/6 px-2 mb-4 flex flex-col items-center">
                <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 hover:scale-110 transition-transform duration-200">
                  <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <div className="text-navy-900 text-sm font-medium mt-1 text-center">
                  {imageTitle[index] || 'No Title'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
