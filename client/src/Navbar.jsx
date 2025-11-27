import { useEffect, useState } from "react";
import { CgMail } from "react-icons/cg";
import { BsTelephone, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

export default function App() {
    const [loading, setLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {loading ? (
                // ---------------- PRELOADER ----------------
                <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white z-50 transition-opacity duration-500">
                    <div className="text-center">
                        <div className="w-48 h-48 rounded-full flex items-center justify-center animate-pulse shadow-2xl bg-white p-4 border-4 border-blue-100">
                            <img
                                src="/logo.jpg"
                                alt="Mount Summit World School Logo"
                                className="w-40 h-40 object-contain"
                            />
                        </div>
                        <div className="mt-6">
                            <div className="text-2xl font-bold text-blue-800 mb-2">
                                Mount Summit World School
                            </div>
                            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
                        </div>
                    </div>
                </div>
            ) : (
                // ---------------- MAIN CONTENT ----------------
                <div className="min-h-screen">
                    {/* -------- Top Info Bar -------- */}
                    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 shadow-lg border-b border-blue-600 fixed top-0 left-0 right-0 z-50">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex flex-col lg:flex-row justify-between items-center space-y-1 lg:space-y-0">
                                {/* Left Section - Contact Info */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
                                    <div className="flex items-center gap-2 text-xs lg:text-sm">
                                        <CgMail className="text-blue-300 text-sm" />
                                        <span className="text-blue-100">mountsummitworldschool01@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs lg:text-sm">
                                        <BsTelephone className="text-blue-300 text-sm" />
                                        <span className="text-blue-100">9852042044, 9862012750</span>
                                    </div>
                                </div>

                                {/* Right Section - Official Info & Social */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
                                    <div className="flex gap-3 text-xs">
                                        <div className="bg-blue-700/50 px-2 py-1 rounded-full">
                                            <span className="text-blue-100">PAN: 202378977</span>
                                        </div>
                                        <div className="bg-blue-700/50 px-2 py-1 rounded-full">
                                            <span className="text-blue-100">REG NO: 2201, Sunsari</span>
                                        </div>
                                    </div>

                                    {/* Social Media Icons */}
                                    <div className="flex gap-2">
                                        <a href="#" className="text-blue-300 hover:text-white transition duration-300">
                                            <BsFacebook className="text-sm" />
                                        </a>
                                        <a href="#" className="text-blue-300 hover:text-white transition duration-300">
                                            <BsYoutube className="text-sm" />
                                        </a>
                                        <a href="#" className="text-blue-300 hover:text-white transition duration-300">
                                            <BsInstagram className="text-sm" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------- Main Navbar -------- */}
                    <nav className={`bg-white fixed top-[40px] left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'shadow-2xl py-1' : 'shadow-lg py-2'}`}>
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex items-center justify-between">
                                {/* Logo Section */}
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/logo.jpg"
                                        alt="Mount Summit World School Logo"
                                        className={`transition-all duration-300 ${scrolled ? 'w-12 h-12' : 'w-16 h-16'}`}
                                    />
                                    <div className={`transition-all duration-300 ${scrolled ? 'scale-90' : ''}`}>
                                        <h1 className="text-lg font-bold text-blue-900 leading-tight">
                                            Mount Summit World School
                                        </h1>
                                        <p className="text-xs text-gray-600 font-medium">
                                            ShivChowk, Sunsari
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop Navigation */}
                                <div className="hidden lg:flex items-center gap-6">
                                    <div className="flex gap-6 font-semibold">
                                        {[
                                            { name: "Home", href: "#" },
                                            { name: "About", href: "#" },
                                            { name: "Academics", href: "#" },
                                            { name: "Admissions", href: "#" },
                                            { name: "Faculty", href: "#" },
                                            { name: "Events", href: "#" },
                                            { name: "Contact", href: "#" }
                                        ].map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="text-gray-700 hover:text-blue-700 relative group transition duration-300 text-sm"
                                            >
                                                {item.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                            </a>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <button className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center gap-2 text-sm">
                                        <span>Apply Now</span>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Mobile Menu Button */}
                                <button
                                    className="lg:hidden text-gray-700 p-1"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {isMenuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
                                </button>
                            </div>

                            {/* Mobile Navigation */}
                            {isMenuOpen && (
                                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-200">
                                    <div className="flex flex-col p-3 space-y-3">
                                        {[
                                            "Home", "About", "Academics", "Admissions",
                                            "Faculty", "Events", "Contact"
                                        ].map((item) => (
                                            <a
                                                key={item}
                                                href="#"
                                                className="text-gray-700 hover:text-blue-700 font-semibold py-2 px-3 rounded-lg hover:bg-blue-50 transition duration-300 text-sm"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item}
                                            </a>
                                        ))}
                                        <button className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 rounded-lg font-semibold mt-3 text-sm">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Content Spacer - Reduced gap */}
                    <div className="pt-[200px]"> {/* Reduced from 136px to 80px */}
                        {/* Your main content goes here - Slider will start right after navbar */}
                    </div>
                </div>
            )}
        </>
    );
}