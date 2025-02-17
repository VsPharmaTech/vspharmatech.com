import { useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              if (videoRef.current) {
                videoRef.current.play();
              }
            }, 500); // Delayed play after 500ms when video is in view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative lg:min-h-screen flex justify-center items-center bg-gray-100">
      {/* Container to limit video width on larger screens */}
      <div className="container mx-auto">
        <video
          ref={videoRef}
          className={`w-full rounded-lg shadow-lg transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
        >
          <source src="/BFSVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoPlayer;
