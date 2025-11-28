import React from "react";

const Achievements = () => {
  const galleryImages = [
    "/achieve.png",
    "/group.png",
    "/price.png",
    "/image.png",
    "/root.png",
    "/school.png",
    "/change.png",
    "/logo.jpg",
  ];

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Decorative Ribbon/Watermark Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full opacity-20 rotate-45 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-purple-200 to-purple-400 rounded-full opacity-20 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
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
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition transform hover:scale-105 relative overflow-hidden"
            >
              {/* Ribbon effect behind card */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full opacity-20 rotate-45 pointer-events-none"></div>
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
                className="w-50 h-38 rounded-lg object-cover flex-shrink-0 shadow-md"
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
