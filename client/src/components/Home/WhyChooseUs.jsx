import React, { useState } from "react";
import { FaChalkboardTeacher, FaLaptop, FaFootballBall, FaSmile } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const faqs = [
    {
        question: "Experienced Faculty",
        icon: <FaChalkboardTeacher className="text-blue-600" />,
        answer: "Our teachers are highly qualified and experienced to provide the best education for your child.",
    },
    {
        question: "Modern Classrooms & Labs",
        icon: <FaLaptop className="text-green-600" />,
        answer: "We provide state-of-the-art classrooms and laboratories for interactive and practical learning.",
    },
    {
        question: "Sports & Extracurricular Programs",
        icon: <FaFootballBall className="text-red-600" />,
        answer: "We encourage students to participate in sports, arts, and various extracurricular activities.",
    },
    {
        question: "Safe and Friendly Environment",
        icon: <FaSmile className="text-yellow-600" />,
        answer: "We maintain a safe, friendly, and supportive environment for every student.",
    },
    {
        question: "Library & Reading Programs",
        icon: <FaLaptop className="text-purple-600" />,
        answer: "Our library is well-stocked with books and digital resources, encouraging reading and research habits.",
    },
    {
        question: "Innovative Teaching Methods",
        icon: <FaChalkboardTeacher className="text-pink-600" />,
        answer: "We use modern teaching techniques and technology-enhanced learning to make education engaging and effective.",
    },
    {
        question: "Parent-Teacher Collaboration",
        icon: <FaSmile className="text-orange-600" />,
        answer: "We maintain regular communication with parents to track students' progress and ensure their holistic development.",
    },
    {
        question: "Community & Social Responsibility",
        icon: <FaFootballBall className="text-teal-600" />,
        answer: "We encourage students to participate in community service and social responsibility programs to build character and empathy.",
    },
];

const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
                    Why Choose Us
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
                            >
                                <div className="flex items-center gap-3 text-lg font-medium">
                                    {faq.icon}
                                    {faq.question}
                                </div>
                                <div className="text-blue-600 transition-transform duration-300">
                                    {activeIndex === index ? (
                                        <HiChevronUp className="w-5 h-5 rotate-180" />
                                    ) : (
                                        <HiChevronDown className="w-5 h-5" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`px-6 text-gray-600 text-sm transition-all duration-500 overflow-hidden ${activeIndex === index ? "max-h-96 pb-4" : "max-h-0"}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
