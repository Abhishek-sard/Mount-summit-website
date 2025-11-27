import React, { useState, useEffect } from "react";

const images = [
    "/image.png",
    "/phto.png",
    "/school.png",
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full overflow-hidden bg-gray-100" style={{ height: "85vh" }}>

            {/* Main Text Overlay with Nepali Theme */}
            <div className="absolute top-8 left-8 z-20 bg-gradient-to-r from-blue-600/90 to-green-600/90 px-8 py-6 rounded-2xl backdrop-blur-sm shadow-2xl border-l-4 border-yellow-400">
                <h1 className="text-white text-4xl font-bold font-sans">
                    Quality Education for a Better Future
                </h1>
                <p className="text-white text-lg mt-2 font-light">
                    Academic Excellence • Modern Facilities • Experienced Faculty
                </p>
                <p className="text-yellow-300 text-sm mt-3 font-medium">
                    Established 2054 B.S. 
                </p>
            </div>

            {/* Secondary Info Box */}
            <div className="absolute bottom-8 right-8 z-20 bg-white/95 px-6 py-4 rounded-xl shadow-lg backdrop-blur-sm max-w-md">
                <h3 className="text-gray-800 text-xl font-bold mb-2">📚 Admissions Open</h3>
                <p className="text-gray-600 text-sm">
                    Classes: Nursery to 10 • Scholarship Available • Modern Facilities
                </p>
                <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
                    Apply Now
                </button>
            </div>

            {/* Slides Container */}
            <div
                className="flex transition-transform duration-1000 ease-out h-full"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((img, i) => (
                    <div key={i} className="w-full h-full flex-shrink-0 relative">
                        <img
                            src={img}
                            alt={`School Image ${i + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300"
            >
                <span className="text-2xl font-bold">‹</span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition duration-300"
            >
                <span className="text-2font-bold">›</span>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-4 h-4 rounded-full transition duration-300 ${i === index
                                ? "bg-white scale-125"
                                : "bg-white/60 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>

            {/* Nepali Flag Colors Accent */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-white to-red-600 z-20"></div>
        </div>
    );
};

export default Slider;