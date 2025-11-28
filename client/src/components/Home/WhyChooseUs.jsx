import React, { useState } from "react";
import { FaChalkboardTeacher, FaLaptop, FaFootballBall, FaSmile } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const faqs = [
  {
    question: "Experienced Faculty",
    icon: <FaChalkboardTeacher className="text-blue-600 text-2xl" />,
    answer: "Our teachers are highly qualified and experienced to provide the best education for your child.",
  },
  {
    question: "Modern Classrooms & Labs",
    icon: <FaLaptop className="text-green-600 text-2xl" />,
    answer: "We provide state-of-the-art classrooms and laboratories for interactive and practical learning.",
  },
  {
    question: "Sports & Extracurricular Programs",
    icon: <FaFootballBall className="text-red-600 text-2xl" />,
    answer: "We encourage students to participate in sports, arts, and various extracurricular activities.",
  },
  {
    question: "Safe and Friendly Environment",
    icon: <FaSmile className="text-yellow-500 text-2xl" />,
    answer: "We maintain a safe, friendly, and supportive environment for every student.",
  },
  {
    question: "Library & Reading Programs",
    icon: <FaLaptop className="text-purple-600 text-2xl" />,
    answer: "Our library is well-stocked with books and digital resources, encouraging reading and research habits.",
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Why Choose Us
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
              >
                <div className="flex items-center gap-4 text-lg font-medium">
                  <div className="p-2 bg-blue-100 rounded-full">{faq.icon}</div>
                  <span>{faq.question}</span>
                </div>
                <div className={`text-blue-600 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                  {activeIndex === index ? <HiChevronUp className="w-6 h-6" /> : <HiChevronDown className="w-6 h-6" />}
                </div>
              </button>

              <div
                className={`px-6 text-gray-700 text-sm transition-all duration-500 overflow-hidden ${activeIndex === index ? "max-h-40 py-4" : "max-h-0"}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
