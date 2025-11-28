const IntroAcademic = () => {
    return (
        <section className="py-2 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                <div
                    className="text-center text-gray-700 max-w-6xl mx-auto mb-12 rounded-xl p-12 shadow-md bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/root.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "400px",
                        width: "100%",
                    }}
                >
                    <p className="bg-white/30 p-6 rounded-lg text-gray-800 font-medium text-lg">
                        Our academic programs are designed to build strong fundamentals and
                        develop students’ creativity, critical thinking, and problem-solving
                        skills. With a structured curriculum, trained teachers, and modern
                        teaching methods, we ensure holistic development for every child.
                    </p>
                </div>



                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 – Curriculum */}
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Curriculum Overview
                        </h3>
                        <p className="text-gray-900">
                            A well-planned curriculum focusing on conceptual clarity,
                            creativity, and real-life applications across all subjects.
                        </p>
                    </div>

                    {/* Card 2 – Grade Levels */}
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Grade-Wise Programs
                        </h3>
                        <ul className="text-gray-900 space-y-1">
                            <li>• Nursery – KG: Activity-based learning</li>
                            <li>• Grade 1–5: Foundation building</li>
                            <li>• Grade 6–8: Skill-based learning</li>
                            <li>• Grade 9–10: Exam-focused modules</li>
                        </ul>
                    </div>

                    {/* Card 3 – Teaching Approach */}
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Teaching Approach
                        </h3>
                        <p className="text-gray-900">
                            Interactive teaching, activity-based learning, student-centered
                            classrooms, and modern digital tools for better understanding.
                        </p>
                    </div>

                    {/* Card 4 – Subjects */}
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Subjects Offered
                        </h3>
                        <ul className="text-gray-900 space-y-1">
                            <li>• English</li>
                            <li>• Mathematics</li>
                            <li>• Science</li>
                            <li>• Computer Science</li>
                            <li>• Social Studies</li>
                            <li>• Nepali</li>
                        </ul>
                    </div>

                    {/* Card 5 – Extra Support */}
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Academic Support
                        </h3>
                        <p className="text-gray-900">
                            Revision classes, homework guidance, exam preparation, and
                            progress-tracking to help students succeed.
                        </p>
                    </div>

                    {/* Card 6 – Modern Classrooms */}
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">
                            Modern Classrooms
                        </h3>
                        <p className="text-gray-900">
                            Smart classrooms, digital tools, and practical learning labs
                            ensure an engaging and effective learning environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroAcademic;
