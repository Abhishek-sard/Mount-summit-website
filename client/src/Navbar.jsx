import { useEffect, useState } from "react";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                // ---------------- PRELOADER ----------------
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500">
                    <div className="w-56 h-56 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                        <img
                            src="/logo.jpg"
                            alt="School Logo"
                            className="w-50 h-50 "
                        />
                    </div>
                </div>
            ) : (
                // ---------------- MAIN CONTENT ----------------
                <div>
                    {/* -------- Top Navbar -------- */}
                    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-2 shadow-md">
                        <div className="max-w-6xl mx-auto flex justify-between px-4 text-sm">
                            <div className="flex gap-6">
                                <div className="flex items-center gap-2">
                                    <span>contact@school.edu</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>+1 (123) 456-7890</span>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex items-center gap-2">
                                    <span>PAN: ABCDE1234F</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>REG NO: 2023SCH001</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------- Main Navbar -------- */}
                    <div className="bg-white shadow-md py-4">
                        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/logo.jpg"
                                    alt="School Logo"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <h1 className="text-2xl font-bold text-blue-700">
                                    Bright Future School
                                </h1>
                            </div>

                            <div className="hidden md:flex gap-8 font-semibold">
                                <a href="#" className="hover:text-blue-700 relative">Home</a>
                                <a href="#" className="hover:text-blue-700 relative">About</a>
                                <a href="#" className="hover:text-blue-700 relative">Academics</a>
                                <a href="#" className="hover:text-blue-700 relative">Admissions</a>
                                <a href="#" className="hover:text-blue-700 relative">Faculty</a>
                                <a href="#" className="hover:text-blue-700 relative">Events</a>
                                <a href="#" className="hover:text-blue-700 relative">Contact</a>
                            </div>

                            <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-5 py-2 rounded-md font-semibold shadow-md hover:scale-105 transition">
                                Apply Now
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}
