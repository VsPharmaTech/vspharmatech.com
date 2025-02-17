import { useState } from "react";

const faqData = [
  {
    question: "What is Blow-Fill-Seal (BFS) technology?",
    answer:
      "BFS technology is an advanced aseptic processing technique in which plastic containers are formed by blow/vacuum, filled and sealed in one continuous process.",
  },
  {
    question: "What materials are used in BFS containers?",
    answer:
      "Our BFS containers are made from Low-Density Polyethylene (LDPE) for flexibility and chemical resistance or Polypropylene (PP) for higher temperature resistance and durability. Both materials are biocompatible and suitable for aseptic pharmaceutical packaging.",
  },
  {
    question: "How does VS Pharmatech ensure product sterility?",
    answer:
      "We ensure product sterility through aseptic BFS machines operating in low-particle environments, using protective air showers and pre-sterilized filling liquids. The container polymer undergoes high-temperature sterilization during the molten extrusion stage.",
  },
  {
    question: "What are the maintenance requirements for BFS machines?",
    answer:
    (<>
        -Mould Chain (Rotary Machines): Relubricate chain elements. <br />
        -Mould Opening Cam (Rotary Machines): Relubricate for smooth operation. <br />
        -Mould Tool (Rotary Machines): Relubricate centering pins. <br />
        -Mandrel Unit: Replace O-rings on connection piece holder, mandrel, hood, insert, and shaft. <br />
        -Mandrel Hood Interlocks: Clean V-guides and guides. <br />
        -Connection Block: Replace guide bushes and guide rings. <br />
        -Aseptic Valves: Replace membranes and sealing discs. <br />
        -General Machine Lubrication: Ensure all lubrication points are serviced. <br />
        -System Checks: Inspect mould cooling lines, vacuum leakage, hydraulic pipe oil leakage, hydraulic oil level, extruder gearbox oil level, and extruder V-belt tension.
      </>
    ),
  },
  {
    question: "How can moulds be used for various volumes without changing the change parts?",
    answer:
      "By putting the inserts in the mould, one can alter the objective volume. Example: 500ml without changing the change parts, one can fill 250ml for LVP by introducing the inserts. For SVP, one can go from 5ml to 20ml by introducing the inserts.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-30" id='faq'>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-40 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
        <h3 className="text-secondary font-lora font-bold text-base sm:text-lg text-center">FAQ's</h3>
        <h2 className="font-raleway text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mt-2 sm:mt-3 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-2 sm:mt-3 mb-8 sm:mb-12 text-center">
          Find answers to your most common questions about our services and products.
        </p>

        <div className="space-y-4 sm:space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:px-6 text-left text-base sm:text-lg font-medium text-navy-900 hover:bg-gray-200 transition-all"
              >
                <span>{faq.question}</span>
                <img
                  src={openIndex === index ? "/Minus.png" : "/Plus.png"}
                  alt="Toggle"
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 ml-3" // Added ml-3
                />
              </button>

              {/* Answer (Left Aligned & Proper Spacing) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-80 opacity-100 py-3 sm:py-4 px-4 sm:px-5 md:px-6" : "max-h-0 opacity-0 px-4 sm:px-5 md:px-6"
                }`}
              >
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

