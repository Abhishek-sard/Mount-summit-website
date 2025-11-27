import React from "react";

const WhyChooseUs = () => {
  const data = [
    {
      icon: "👨‍🏫",
      title: "Qualified Faculty",
      desc: "Experienced and dedicated teaching staff",
    },
    {
      icon: "🏫",
      title: "Modern Infrastructure",
      desc: "Well-equipped classrooms and facilities",
    },
    {
      icon: "🌟",
      title: "Holistic Development",
      desc: "Focus on overall personality growth",
    },
    {
      icon: "🛡️",
      title: "Safe Environment",
      desc: "Secure and supervised campus",
    },
    {
      icon: "⚽",
      title: "Extracurricular Activities",
      desc: "Sports, arts, and various clubs",
    },
    {
      icon: "🤝",
      title: "Parent Partnership",
      desc: "Strong home-school collaboration",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our School?
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
