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
                header: ['', 'MODEL', 'STATION', 'MOULDS', 'CONTAINER', 'OUTPUT/HR', 'SIZE OF MACHINE (L, W, H) MM'],
                rows: [
                    ['01', 'VS-211', 'DOUBLE STATION', '39-30 CAVITY', '2, 5, 10, 20 ML', '12000-12500', '3500X4000X2500'],
                    ['02', 'VS-212', 'DOUBLE STATION', '24-24 CAVITY', '5-10, 20, 30 ML', '9500-10000', '3200X4000X2500'],
                    ['03', 'VS-213', 'SINGLE STATION', '40 CAVITY', '2, 5-10 ML', '8300-8500', '2500X4000X2500'],
                ],
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
                    ['01', 'VS-112', 'DOUBLE STATION', '6-6 CAVITY', '100, 250, 500 ML', '2400-2500', '3000X4000X2500'],
                    ['02', 'VS-113', 'DOUBLE STATION', '8-8 CAVITY', '100, 500 ML', '3200-3300', '3200X4000X2500'],
                    ['03', 'VS-114', 'SINGLE STATION', '10 CAVITY', '100, 500 ML', '2000-2100', '2500X4500X2500'],
                    ['04', 'VS-115', 'SINGLE STATION', '8 CAVITY', '100, 500 ML', '1700-1750', '2500X4000X2500'],
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
            description: 'Durable and corrosion-resistant moulds customized to create unique container shapes and sizes, with options for embossing logos or product-specific markings, these moulds ensure a consistent quality that aligns with stringent industry standards.',
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
                'https://pplx-res.cloudinary.com/image/upload/v1739131203/user_uploads/dAsSTBRLvSHHYGu/image.jpg',
                'https://pplx-res.cloudinary.com/image/upload/v1739130812/user_uploads/hZrWEwZHYiVIYaQ/image.jpg',
            ],

            imageTitle: ['', 'MODEL', 'STATION', 'MOULDS', 'CONTAINER', 'OUTPUT/HR'],

            additionalDescription: 'Custom moulds designed to meet your specific requirements.',
        },

        {
            title: 'Industry based Finished Products',
            description: 'Automated inspection systems for furnished products',
            imageSrc:
                'https://pplx-res.cloudinary.com/image/upload/v1739128718/user_uploads/MAxEbtPvIwxePqI/image.jpg',
            category: 'Finished Products',
            features: ['High-speed inspection', 'Accurate defect detection', 'Real-time data analysis'],
            tableData: {
                header: ['Parameter', 'Value'],
                rows: [
                    ['Speed', 'Up to 1000 products/hour'],
                    ['Accuracy', '99.9%'],
                ],
            },
            galleryImages: [
                'https://pplx-res.cloudinary.com/image/upload/v1739131203/user_uploads/dAsSTBRLvSHHYGu/image.jpg',
                'https://pplx-res.cloudinary.com/image/upload/v1739130812/user_uploads/hZrWEwZHYiVIYaQ/image.jpg',
            ],

            imageTitle: ['', 'MODEL', 'STATION', 'MOULDS', 'CONTAINER', 'OUTPUT/HR'],

            additionalDescription: 'Ensure quality with our advanced inspection systems.',
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
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
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
