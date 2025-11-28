import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Teachers", value: 45, icon: "👨‍🏫", color: "from-blue-400 to-blue-600" },
  { label: "Students", value: 1200, icon: "🎓", color: "from-green-400 to-green-600" },
  { label: "Courses", value: 35, icon: "📚", color: "from-purple-400 to-purple-600" },
  { label: "Facilities", value: 15, icon: "🏫", color: "from-yellow-400 to-yellow-500" },
  { label: "Staff", value: 10, icon: "👩‍💻", color: "from-red-400 to-red-600" },
  { label: "Collaborators", value: 5, icon: "👥", color: "from-pink-400 to-pink-600" },
  { label: "Experience", value: 25, icon: "💼", color: "from-gray-400 to-gray-600" },
];

const Count = () => {
  return (
    <div className="py-16 relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-200 rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Our Achievements
        </h2>

        {/* Flex container for a single row */}
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 w-40 md:w-48 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden text-center"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-tr ${stat.color} flex items-center justify-center text-xl text-white shadow-md`}
              >
                {stat.icon}
              </div>

              {/* Animated Counter */}
              <div className="text-2xl md:text-3xl font-bold text-gray-800">
                <CountUp end={stat.value} duration={2} separator="," />
                <span className="text-blue-600">+</span>
              </div>

              {/* Label */}
              <p className="mt-2 text-gray-500 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Count;
