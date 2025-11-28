import React from "react";

const Image = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">

        {/* Left Side Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/image.png"
            alt="School"
            className="rounded-xl shadow-lg w-full md:w-auto max-w-md"
          />
        </div>

        {/* Right Side Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Welcome to Mount Summit World School
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mount Summit School is a private school located in Jhumka, Sunsari, Ramdhuni-1, Nepal. 
            We provide quality education with modern classrooms, well-trained teachers, and a safe learning environment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our focus is on academics, discipline, and overall student development. 
            Students are encouraged to excel in both studies and extracurricular activities.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Image;
