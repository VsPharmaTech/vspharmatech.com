import { useEffect, useRef } from "react";
// import Image from "next/image";

const Headline = ({ text }: { text: string }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      let scrollAmount = 0;
      const speed = 1;
      const step = () => {
        scrollAmount -= speed;
        marquee.style.transform = `translateX(${scrollAmount}px)`;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        requestAnimationFrame(step);
      };
      step();
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-orange-50 py-4">
      <div ref={marqueeRef} className="flex whitespace-nowrap gap-6 animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-800 font-medium">
            <img src="/Star.png" alt="Star" width={18} height={18} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headline;
