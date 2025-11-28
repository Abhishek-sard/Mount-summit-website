import React from "react";

const AboutIntro = () => {
  return (
    <div className="w-full">

      {/* ================= SECTION 1 — SCHOOL INTRO ================= */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/school.png"
          alt="School"
          className="w-full h-90 rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About Our School</h2>
          <p className="text-gray-900 leading-7">
            Our school is dedicated to shaping young minds through a balanced and student-centered education system. We focus on academic excellence, discipline, character building, and overall personality development. With experienced teachers, modern classrooms, digital learning tools, and a supportive environment, we ensure that every child receives personal attention and the right guidance. Our goal is to inspire curiosity, encourage creativity, and equip students with the knowledge and values needed to succeed in the real world. We strive to create responsible, confident, and compassionate individuals who can contribute positively to society.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2 — MISSION & VISION (TEXT LEFT) ================= */}
      <section className="bg-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Mission & Vision</h2>
            <p className="text-gray-900 leading-7 mb-3">
              <strong>Mission:</strong> To provide modern, value-based education that
              helps students develop confidence, creativity, and leadership.
            </p>
            <p className="text-gray-900 leading-7">
              <strong>Vision:</strong> To become a leading educational institution
              known for academic excellence and strong character building.
            </p>
          </div>
          <img
            src="/line.png"
            className="w-full h-90 rounded-xl shadow-lg"

          />
        </div>
      </section>

      {/* ================= SECTION 3 — WHY CHOOSE US ================= */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/group.png"
          alt="Why Choose Us"
          className="w-full rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Why Choose Us?</h2>
          <ul className="text-gray-900 leading-7 space-y-2">
            <li>✔️ Experienced and friendly teachers</li>
            <li>✔️ Modern classrooms and updated curriculum</li>
            <li>✔️ Regular parent-teacher interaction</li>
            <li>✔️ Focus on discipline, values, and leadership</li>
            <li>✔️ Safe and supportive environment</li>
          </ul>
        </div>
      </section>

      {/* ================= SECTION 4 — PRINCIPAL MESSAGE ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Message From Principal</h2>
            <p className="text-gray-900 leading-7 mb-3">
              Dear students and parents,
              Our goal is to shape disciplined, responsible, and talented individuals.
              We believe in quality education supported by modern teaching strategies
              and strong moral values.
            </p>
            <p className="text-gray-900">
              Thank you for trusting us. Together, we will build a brighter future.
            </p>
          </div>
          <img
            src="/bhoj.png"
            alt="Principal"
            className="w-full rounded-full shadow-xl border-4 border-blue-600"
          />
        </div>
      </section>

      {/* ================= SECTION 5 — FACILITIES ================= */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Our Facilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">📚 Library</h3>
            <p className="text-gray-600">A well-stocked library for students to learn and grow.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">💻 Computer Lab</h3>
            <p className="text-gray-600">Updated systems with high-speed internet for learning.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">⚽ Sports</h3>
            <p className="text-gray-600">Weekly sports activities for physical and mental growth.</p>
          </div>
        </div>
      </section>

      {/* Team members */}
      {/* Team Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            Our Dedicated Team
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Meet the experienced and passionate educators who work tirelessly
            to guide and support our students.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Mr. Ram Sharma",
                position: "Principal",
                img: "/principal.jpg",
              },
              {
                name: "Mrs. Sita Thapa",
                position: "Vice Principal",
                img: "/viceprincipal.jpg",
              },
              {
                name: "Mr. Rohan Karki",
                position: "Mathematics Teacher",
                img: "/teacher1.jpg",
              },
              {
                name: "Mrs. Pooja Adhikari",
                position: "Science Teacher",
                img: "/teacher2.jpg",
              },
              {
                name: "Mr. Keshav Rai",
                position: "Computer Instructor",
                img: "/teacher3.jpg",
              },
              {
                name: "Mrs. Anjali Gurung",
                position: "English Teacher",
                img: "/teacher4.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-blue-600"
                />
                <h3 className="text-xl font-bold mt-4 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
};

export default AboutIntro;
