import React from "react";

const Achievements = () => {
  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Our Achievements & Results
        </h2>
        <p className="text-gray-900 max-w-3xl mx-auto mb-12">
          We are proud of our consistent academic excellence and overall success
          in shaping future leaders.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "100%", subtitle: "SEE Result", description: "All students passed with excellent grades." },
            { title: "District", subtitle: "Topper", description: "Ranked among the best-performing schools." },
            { title: "Awards", subtitle: "& Recognitions", description: "Honored for excellence in education and discipline." }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-4xl font-extrabold text-blue-700">{item.title}</h3>
              <p className="text-lg font-semibold text-gray-700 mt-2">{item.subtitle}</p>
              <p className="text-gray-900 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Auto Moving Image Slider */}
        <div className="overflow-hidden py-6">
          <div className="flex gap-6 animate-slide">
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-40 h-28 rounded-lg object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slider Animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            display: flex;
            animation: slide 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Achievements;
