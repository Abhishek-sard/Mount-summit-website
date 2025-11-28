import React from "react";

const Image = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">

        {/* Left Side Image */}
        <div>
          <img
            src="/image.png"
            alt="School"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Right Side Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Welcome to Mount Summit world School
          </h2>
            Mount Summit School is a private school located in the Jhumka, Sunsari
            Ramdhuni -1,Nepal. We provide quality education with modern
            classrooms, well-trained teachers, and a safe learning environment.
            We focus on academics, discipline, and overall student development.
          <p className="text-gray-700 leading-relaxed">
            Our school provides quality education with modern classrooms,
            well-trained teachers, and a safe learning environment.
            We focus on academics, discipline, and overall student development.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Image;
