// Intro.jsx
import React, { useState, useEffect } from "react";

const images = [
  "/image.png",
  "/schoolimage.jpg",
  "/school.png",
];

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
      {/* Slider Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay Text */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center text-green-400">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to Mount Summit World School
        </h1>
        <p className="mt-2 text-lg md:text-2xl drop-shadow-md">
          Providing Quality Education for Everyone
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-80"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-80"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-700" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Intro;
