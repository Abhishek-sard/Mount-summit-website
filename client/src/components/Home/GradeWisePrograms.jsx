import React from "react";

const GradeWisePrograms = () => {
  const programs = [
    {
      title: "Early Childhood",
      grade: "Nursery - KG",
      icon: "🧸",
      desc: "Fun-based learning foundation for young children.",
    },
    {
      title: "Primary Education",
      grade: "Grade 1 - 5",
      icon: "📚",
      desc: "Strong academic base with creative exploration.",
    },
    {
      title: "Secondary Education",
      grade: "Grade 6 - 10",
      icon: "🎓",
      desc: "Advanced curriculum focusing on discipline & career prep.",
    },
  ];

  const features = [
    "Smart Classroom",
    "E-Library & Computer Lab",
    "Skill Development Programs",
    "Sports & Co-curricular Activities",
    "Health & Safety Monitoring",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Grade-wise Programs
        </h2>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 classname="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-blue-600 font-medium mb-2">{item.grade}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Special Features */}
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Special Features
        </h3>

        <ul className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700 text-lg"
            >
              <span className="text-blue-600 text-xl">✔</span>
              {feature}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default GradeWisePrograms;
