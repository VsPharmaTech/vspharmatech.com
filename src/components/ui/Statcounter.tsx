"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { title: "Experience", target: 18 },
  { title: "Projects Completed", target: 241 },
  { title: "Works Employed", target: 120 },
  { title: "Projects Running", target: 12 },
];

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        let start = 0;
        const duration = 1400; // Animation duration in ms
        const startTime = performance.now();

        const updateCounter = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          if (elapsed >= duration) {
            setCount(target);
            return;
          }

          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.floor(progress * target));

          requestAnimationFrame(updateCounter);
        };

        requestAnimationFrame(updateCounter);
      }, 300); // Start counting after 300ms delay
    }
  }, [isInView, target]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl md:text-6xl font-lora font-bold flex items-center"
    >
      {count}
      <span className="ml-1 text-2xl sm:text-3xl md:text-4xl">+</span>
    </span>
  );
};

const Statcounter = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-indigo-950 text-white py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-lg sm:text-xl pb-2 sm:pb-3">{stat.title}</p>
            <Counter target={stat.target} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statcounter;
