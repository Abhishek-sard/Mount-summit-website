import React, { useState, useEffect } from "react";

const testimonials = [
  {
    img: "/s1.jpg",
    name: "Aarav Sharma",
    class: "Class 8",
    text: "This school helped me gain confidence and improve my studies. Teachers are very friendly!",
  },
  {
    img: "/s2.jpg",
    name: "Sneha Karki",
    class: "Class 10",
    text: "Amazing environment! I enjoy the practical learning and discipline here.",
  },
  {
    img: "/s3.jpg",
    name: "Rohan Magar",
    class: "Class 6",
    text: "I love the sports facilities and computer lab. Best school experience!",
  },
  {
    img: "/s4.jpg",
    name: "Priya Joshi",
    class: "Class 9",
    text: "Teachers always encourage us to do better. I feel very supported.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
          What Students Say
        </h2>

        {/* Slider Container */}
        <div className="relative">
          {/* Slide Wrapper */}
          <div className="grid md:grid-cols-2 gap-8 transition-all duration-700">
            {/* Fade Transition */}
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg flex items-center gap-6 opacity-0 fade-animation"
            >
              <img
                src={testimonials[index].img}
                alt="Student"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <div>
                <p className="text-gray-600 text-lg mb-3">{testimonials[index].text}</p>
                <h3 className="text-xl font-bold text-blue-700">
                  — {testimonials[index].name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonials[index].class}</p>
              </div>
            </div>

            {/* Second row (next slide preview) */}
            <div
              key={index + 1}
              className="bg-white p-8 rounded-xl shadow-lg flex items-center gap-6 opacity-0 fade-animation"
            >
              <img
                src={testimonials[(index + 1) % testimonials.length].img}
                alt="Student"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <div>
                <p className="text-gray-600 text-lg mb-3">
                  {testimonials[(index + 1) % testimonials.length].text}
                </p>
                <h3 className="text-xl font-bold text-blue-700">
                  — {testimonials[(index + 1) % testimonials.length].name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {testimonials[(index + 1) % testimonials.length].class}
                </p>
              </div>
            </div>
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

      {/* Fade Animation CSS */}
      <style>
        {`
          .fade-animation {
            animation: fadeIn 1s ease-in-out forwards;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
