import React, { useState, useEffect } from 'react';
import ProductDetail from './Productdetail';

interface Product {
    title: string;
    description: string;
    imageSrc: string;
    category: string;
    features: string[];
    tableData: { header: string[]; rows: string[][] };
    galleryImages: string[];
    imageTitle: string[];
    additionalDescription?: string;
}

const ProductTags: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('BFS Machines');
    const [isVisible, setIsVisible] = useState(false);

    // Function to extract category from hash
    const getCategoryFromHash = (): string => {
        const hash = window.location.hash;
        if (hash === '#BfsMachines') return 'BFS Machines';
        if (hash === '#BfsMoulds') return 'BFS Moulds';
        if (hash === '#FinishedProducts') return 'Finished Products';
        return 'BFS Machines'; // Default category
    };

    useEffect(() => {
        // Set active category based on URL hash on initial load
        const categoryFromHash = getCategoryFromHash();
        setActiveCategory(categoryFromHash);

        // Visibility observer (as before)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(document.querySelector('#product-tags-section')!);
        return () => {
            observer.disconnect();
        };
    }, []); // Empty dependency array to run only on mount

    const products: Product[] = [
        {
            title: 'Small Volume Parenteral (SVPs) Machines',
            description:
                'Precision-engineered BFS machines designed for sterile production of small Volume Parenterals in containers ranging from 0.4ml to 30ml, ideal for injectables, eye drops, and single-dose solutions.',
            imageSrc:
                '/MachineBg.png',
            category: 'BFS Machines',
            features: [
                'High output, producing up to 12,500 containers per hour.',
                'Compact designs to optimize space in cleanroom environments.',
                'Advanced servo systems and SCADA controls for precision and efficiency.',
            ],

            tableData: {
                header: ['', 'MODEL', 'STATION', 'MOULDS', 'CONTAINER', 'OUTPUT/HR'],
                rows: [
                    ['01', 'VS-2201', 'DOUBLE', '20-20', '0.5, 1-3, 5/10ML', '9000'],
                    ['-', '-', '-', '16-16', '20-25-30ML', '6700'],
                    ['02', 'VS-2202', 'DOUBLE', '25-25', '0.5,1-3 , 5/10ML', '10000'],
                    ['-', '-', '-', '20-20', '20-25-30ML', '8400'],
                    ['03', 'VS-2203', 'DOUBLE', '30-30', '0.5, 1-3, 5/10ML', '11500'],
                    ['-', '-', '-', '25-25', '20-25-30ML', '10000'],
                    ['04', 'VS-2204', 'DOUBLE', '35-35', '0.5, 1-3, 5/10ML', '12500'],
                    ['-', '-', '-', '30-30', '20-25-30ML', '11500'],
                    ['05', 'VS-2205', 'DOUBLE', '40-40', '0.5, 1-3, 5/10ML', '13500'],
                    ['-', '-', '-', '36-36', '20-25-30ML', '12900'],
                    ['06', 'VS-2101', 'SINGLE', '20', '0.5, 1-3, 5/10ML', '4800'],
                    ['-', '-', '-', '16', '20-25-30ML', '3850'],
                    ['07', 'VS-2102', 'SINGLE', '25', '0.5, 1-3, 5/10ML', '6000'],
                    ['-', '-', '-', '20', '20-25-30ML', '4800'],
                    ['08', 'VS-2103', 'SINGLE', '30', '0.5, 1-3, 5/10ML', '7200'],
                    ['-', '-', '-', '25', '20-25-30ML', '6000'],
                    ['09', 'VS-2104', 'SINGLE', '35', '0.5, 1-3, 5/10ML', '7500'],
                    ['-', '-', '-', '30', '20-25-30ML', '7100'],
                    ['10', 'VS-2105', 'SINGLE', '40', '0.5, 1-3, 5/10ML', '8200'],
                    ['-', '-', '-', '36', '20-25-30ML', '7600'],]
            },

            galleryImages: [
                '/Vaccines.png',
                '/Eye-drops.png',
                '/Suspensions.png',
                '/Enemas.png',
                '/Wfi.png',
                '/Sprays.png',
            ],

            imageTitle: [
                'Vaccines',
                'Eye Drops',
                'Suspensions',
                'Enemas',
                'W.F.I.',
                'Sprays',],

            additionalDescription:
                'Our SVPs machines are designed for optimal performance and reliability.',

        },

        {
            title: 'Large Volume Parenteral (LVPs) Machines',
            description:
                'High-capacity BFS machines designed for sterile production of Large Volume Parenterals in containers ranging from 100ml to 500ml or larger, perfect for IV fluids, nutritional solutions and other pharmaceutical applications.',
            imageSrc:
                '/LVPimage.jpg',
            category: 'BFS Machines',
            features: [
                'Tailored output & capacities to match client-specific requirements.',
                'Robust construction using high-quality materials like SS316L.',
                'Flexible configurations to accommodate various container shapes and sizes.',
            ],
            tableData: {
                header: ['', 'MODEL', 'STATION', 'MOULDS', 'CONTAINER', 'OUTPUT/HR', 'SIZE OF MACHINE (L, W, H) MM'],
                rows: [
                    ['11', 'VS-1101', 'SINGLE', '6', '100/250/500ML', '1260'],
                    ['12', 'VS-1102', 'SINGLE', '8', '100/250/500ML', '1680'],
                    ['13', 'VS-1103', 'SINGLE', '10', '100/250/500ML', '2100'],
                    ['14', 'VS-1104', 'SINGLE', '12', '100/250/500ML', '2400'],
                    ['15', 'VS-1201', 'DOUBLE', '6--6', '100/250/500ML', '2160'],
                    ['16', 'VS-1202', 'DOUBLE', '8--8', '100/250/500ML', '2880'],
                    ['17', 'VS-1203', 'DOUBLE', '10--10', '100/250/500ML', '3600'],
                    ['18', 'VS-1204', 'DOUBLE', '12---12', '100/250/500ML', '3930'],
                    ['19', 'VS-1111', 'SINGLE', '6', '1000/500ML', '865'],
                    ['20', 'VS-1112', 'SINGLE', '8', '1000/500ML', '1150'],
                    ['21', 'VS-1213', 'DOUBLE', '6---6', '1000/500ML', '1450']
                ],
            },
            galleryImages: [
                '/Vaccines.png',
                '/Irrigation.png',
                '/Sodium.png',
                '/Enemas.png',
                '/Contact-lens.png',
                '/Eye-wash.png',
            ],

            imageTitle: [
                'IV Solutions',
                'Irrigation',
                'NaCl Liquid',
                'Glucose',
                'Lenses Liquid',
                'Eye Wash',],

            additionalDescription:
                'Our LVPs machines ensure high throughput and quality for large volume parenteral production.',
        },
        {
            title: 'Custom BFS Moulds & Spare Parts',
            description: 'Durable and corrosion-resistant moulds for creating customized container shapes & sizes, these moulds ensure a consistent quality that aligns with stringent industry standards.',
            imageSrc:
                '/The-Mould.png',
            category: 'BFS Moulds',
            features: [
                'Made from corrosion-resistant aluminum bronze for durability.',
                'Internal cooling channels for faster production cycles.',
                'Seamless integration with BFS machines for quick and efficient setup.'],
            tableData: {
                header: [],
                rows: [],
            },
            galleryImages: [
                './Mould-Carriage.png',
                './Extruder-Head.png',
                './Products2.png',
                './SVPMould.jpg',
                './LVPMould.jpg',
                './Closing-Unit.png',
            ],

            imageTitle: ['Mould Carriage', 'Extruder Head', 'Parison Holder','SVP Mould', 'LVP Mould', 'Mould Closing Unit'],

            additionalDescription: 'Custom moulds designed to meet your specific requirements.',
        },

        {
            title: 'Industry based Finished Products',
            description: 'Our BFS technology enables the production of a wide range of industry-specific finished products, ensuring sterility and compliance with global pharmaceutical standards. Our BFS solutions cater to the highest demands of the healthcare & pharmaceutical industries.',
            imageSrc:
                './Finishedproducts.jpg',
            category: 'Finished Products',
            features: ['Supports various container shapes & sizes, tailored to meet the specific Industry applications.', 'Sealed, sterile environment, eliminating human intervention and minimizing contamination risks.', 'Regulatory Compliance and High-Quality Standards'],
            tableData: {
                header: [],
                rows: [],
            },
            galleryImages: [
                './Healthcare1.png',
                './Healthcare2.png',
                './Healthcare3.png',
                './Healthcare4.png',
                'Wellness3.png',
                'Missc1.png',
            ],

            imageTitle: ['Opthalmics', 'Injectables', 'Infusions', 'Inhalation Solutions', 'Foods & Juices', 'Polymer Resins'],

            additionalDescription: 'Sterile and Customizable Finished Products',
        },
    ];

    const filteredProducts = products.filter(
        (product) => product.category === activeCategory
    );

    return (
        <section
            id="product-tags-section"
            className={`py-8 sm:py-12 bg-gray-50 transition-opacity duration-500 mt-8 sm:mt-16 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6">
                {/* Title, Heading, Description */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-secondary font-lora text-base sm:text-lg font-bold">Our Products</h2>
                    <h3 className="text-navy-900 font-raleway text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3">
                        Our <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold"> Cutting-Edge </span> BFS Products
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg max-w-5xl mx-auto mt-2 sm:mt-3">
                        We offer an extensive range of high-quality BFS machines and
                        moulds, each engineered to deliver outstanding performance.
                    </p>
                </div>... {/* Category Buttons */}
                <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 sm:mb-16 mt-10 sm:mt-12">
                    <button
                        id='BfsMachines'
                        className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-medium ${activeCategory === 'BFS Machines'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-blue-300 transition-colors duration-300'
                            }`}
                        onClick={() => setActiveCategory('BFS Machines')}
                    >
                        (BFS) Blow-Fill-Seal Machines
                    </button>
                    <button
                        id='BfsMoulds'
                        className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-medium ${activeCategory === 'BFS Moulds'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-blue-200 transition-colors duration-300'
                            }`}
                        onClick={() => setActiveCategory('BFS Moulds')}
                    >
                        BFS Moulds & Spare Parts
                    </button>
                    <button
                        id='FinishedProducts'
                        className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-medium ${activeCategory === 'Finished Products'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-blue-300 transition-colors duration-300'
                            }`}
                        onClick={() => setActiveCategory('Finished Products')}
                    >
                        Finished Products
                    </button>
                </div>

                {/* Product Detail Cards */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
                    {filteredProducts.slice(0, 2).map((product, index) => (
                        <ProductDetail
                            key={index}
                            title={product.title}
                            description={product.description}
                            imageSrc={product.imageSrc}
                            features={product.features}
                            tableData={product.tableData}
                            galleryImages={product.galleryImages}
                            imageTitle={product.imageTitle}
                            additionalDescription={product.additionalDescription}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductTags;
