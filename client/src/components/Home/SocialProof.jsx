import React from "react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Asha Sharma",
      role: "Parent",
      message:
        "This school has helped my child grow academically and socially. The teachers are very supportive!",
      icon: "👩‍👧",
    },
    {
      name: "Rabin Karki",
      role: "Student",
      message:
        "I improved my skills and gained confidence through various school activities and dedicated teachers.",
      icon: "🧑‍🎓",
    },
    {
      name: "Sarita Thapa",
      role: "Alumni",
      message:
        "The foundation I received here helped me excel in college and start my professional journey successfully.",
      icon: "🎓",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Social Proof
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4 text-center">{t.icon}</div>
              <p className="text-gray-600 italic mb-4 text-center">
                "{t.message}"
              </p>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {t.name}
              </h3>
              <p className="text-sm text-blue-600 text-center">{t.role}</p>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg font-medium">
            Stories of trust, success, and inspiration from our school community.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
