import React, { useState, useEffect } from "react";

const testimonials = [
  { img: "/my.png", name: "Abhishek Sardar", class: "PassOut", text: "This school helped me gain confidence and improve my studies. Teachers are very friendly!" },
  { img: "/my.png", name: "Sneha Karki", class: "PassOut", text: "Amazing environment! I enjoy the practical learning and discipline here." },
  { img: "/my.png", name: "Rohan Magar", class: "PassOut", text: "I love the sports facilities and computer lab. Best school experience!" },
  { img: "/my.png", name: "Priya Joshi", class: "PassOut", text: "Teachers always encourage us to do better. I feel very supported." },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
          What Students Say
        </h2>

        <div className="relative">
          {/* Slide Wrapper */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-xl shadow-lg flex items-center gap-6 transition-all duration-700 ${
                  i === index || i === (index + 1) % testimonials.length
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 pointer-events-none"
                }`}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="text-gray-600 text-lg mb-3">{t.text}</p>
                  <h3 className="text-xl font-bold text-blue-700">— {t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.class}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                  index === i ? "bg-blue-600 scale-110" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade Animation */}
      <style>
        {`
          .transition-all {
            transition: all 0.7s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
