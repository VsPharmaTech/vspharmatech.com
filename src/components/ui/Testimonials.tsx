import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  position: string;
  image: string;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Turner",
    position: "",
    image: "/Person1.jpg",
    comment:
      "V S Pharmatech's BFS machines revolutionized our production process. The quality and support are unmatched. Their dedication to excellence is truly commendable.",
  },
  {
    name: "Sarah Johnson",
    position: "",
    image: "/Person2.jpg",
    comment:
      "Their commitment to innovation and precision is truly impressive. Our business has greatly benefited from their expertise, and we highly recommend them.",
  },
  {
    name: "David Smith",
    position: "",
    image: "/Person3.png",
    comment:
      "Not only is the equipment top-notch, but the customer support team is always ready to assist. Their expertise in aseptic manufacturing is exceptional!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-30 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-40">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('/Background-gradient-u.svg')] bg-cover bg-center z-0"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Title */}
        <h3 className="text-center text-secondary font-lora font-bold text-lg">
          Our Testimonials
        </h3>

        <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 text-center mt-2 sm:mt-3">
          Listen from our <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold"> Overseas Satisfied </span> Clients
        </h2>

        <p className="text-gray-600 text-base sm:text-lg text-center max-w-3xl mx-auto mb-8 sm:mb-12 mt-1 sm:mt-2">
          Hear firsthand from those who trust us with their health, well-being, and business.
        </p>

        {/* Testimonial Card */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
            }
            className="absolute left-1 sm:left-2 md:left-6 -translate-x-1/2 sm:translate-x-0 md:-translate-x-14 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md hover:scale-110 transition-all duration-300 z-10"
          >
            <img src="/Back.png" alt="Previous" className="w-4 sm:w-5 md:w-6 lg:w-8 h-4 sm:h-5 md:h-6 lg:h-8" />
          </button>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-14 flex flex-col md:flex-row items-center w-full max-w-md sm:max-w-lg md:max-w-4xl mx-auto transition-all duration-500 transform scale-100 hover:scale-105">
            {/* Image */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src="/Quote.png"
              alt="Quote"
              className="w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 absolute -top-3 -right-2 sm:-top-4 sm:-right-4 lg:top-8 lg:right-8 opacity-20"
            />
            {/* Testimonial Content */}
            <div className="flex-1 mt-3 sm:mt-4 md:mt-0 px-4 lg:px-6 relative text-center md:text-left">
              <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
                "{testimonials[index].comment}"
              </p>
              <h4 className="mt-2 sm:mt-4 font-semibold text-navy-900 text-base sm:text-xl md:text-2xl">
                {testimonials[index].name}
              </h4>
              <p className="text-gray-500 text-sm sm:text-sm md:text-lg">{testimonials[index].position}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-1 sm:right-2 md:right-6 translate-x-1/2 sm:translate-x-0 md:translate-x-14 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md hover:scale-110 transition-all duration-300 z-10"
          >
            <img src="/Next.png" alt="Next" className="w-4 sm:w-5 md:w-6 lg:w-8 h-4 sm:h-5 md:h-6 lg:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}


