import React from "react";

const Achievements = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Our Achievements & Results
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We are proud of our consistent academic excellence and overall success
          in shaping future leaders.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Achievement 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-4xl font-extrabold text-blue-700">100%</h3>
            <p className="text-lg font-semibold text-gray-700 mt-2">
              SEE Result
            </p>
            <p className="text-gray-500 text-sm mt-2">
              All students passed with excellent grades.
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-4xl font-extrabold text-blue-700">District</h3>
            <p className="text-lg font-semibold text-gray-700 mt-2">Topper</p>
            <p className="text-gray-500 text-sm mt-2">
              Ranked among the best-performing schools.
            </p>
          </div>

          {/* Achievement 3 */}
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition">
            <h3 className="text-4xl font-extrabold text-blue-700">Awards</h3>
            <p className="text-lg font-semibold text-gray-700 mt-2">
              & Recognitions
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Honored for excellence in education and discipline.
            </p>
          </div>
        </div>

        {/* Auto Moving Image Slider */}
        <div className="overflow-hidden py-6">
          <div className="flex gap-6 animate-slide">
            {/* 8 Images */}
            <img src="/gallery1.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery2.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery3.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery4.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery5.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery6.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery7.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery8.jpg" className="w-40 h-28 rounded-lg object-cover" />

            {/* Duplicate for infinite effect */}
            <img src="/gallery1.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery2.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery3.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery4.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery5.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery6.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery7.jpg" className="w-40 h-28 rounded-lg object-cover" />
            <img src="/gallery8.jpg" className="w-40 h-28 rounded-lg object-cover" />
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
            display: inline-flex;
            animation: slide 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Achievements;
