import React, { useState, useEffect } from "react";

const images = [
  "/image.png",
  "/schoolimage.jpg",
  "/logo.jpg",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000); // 1 second auto-change

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[600px] h-[350px] mx-auto overflow-hidden rounded-xl">

      {/* Image Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 600}px)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-[600px] h-[350px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
