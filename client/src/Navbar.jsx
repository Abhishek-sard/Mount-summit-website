import { useState, useEffect } from "react";
import {
    CgMail
} from "react-icons/cg";
import {
    BsFacebook,
    BsYoutube,
    BsInstagram,
    BsTelephoneFill
} from "react-icons/bs";
import {
    HiMenu,
    HiX,
    HiChevronDown
} from "react-icons/hi";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        // Preloader timer
        const timer = setTimeout(() => setLoading(false), 2500);

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Preloader Component
    const Preloader = () => (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white z-50 transition-opacity duration-500">
            <div className="text-center">
                <img
                    src="/logo.jpg"
                    alt="Mount Summit World School Logo"
                    className="w-52 h-52 object-contain animate-pulse"
                />
                <div className="flex justify-center space-x-2 mt-6">
                    <div className="w-3 h-3 bg-blue-600 animate-bounce"></div>
                    <div className="w-3 h-3 bg-green-600 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-indigo-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );

    if (loading) return <Preloader />;

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 text-white relative z-50">
                <div className="relative max-w-8xl mx-auto px-4 py-2 flex flex-col lg:flex-row justify-between items-center gap-3">
                    {/* Left - Contact */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2 group">
                            <div className="p-1.5 bg-blue-700/30 rounded-lg group-hover:bg-blue-600/50 transition-all duration-300">
                                <CgMail className="text-blue-200 text-sm" />
                            </div>
                            <span className="text-blue-100 text-xs sm:text-sm font-medium tracking-wide">
                                mountsummitworldschool01@gmail.com
                            </span>
                        </div>
                        <div className="flex items-center gap-2 group">
                            <div className="p-1.5 bg-green-700/30 rounded-lg group-hover:bg-green-600/50 transition-all duration-300">
                                <BsTelephoneFill className="text-green-200 text-xs" />
                            </div>
                            <span className="text-blue-100 text-xs sm:text-sm font-medium tracking-wide">
                                9852042044, 9862012750
                            </span>
                        </div>
                    </div>

                    {/* Right - Social & Official */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                                <span className="text-blue-100 text-xs font-semibold tracking-tight">
                                    PAN: 202378977
                                </span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                                <span className="text-blue-100 text-xs font-semibold tracking-tight">
                                    REG NO: 2201
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                                <BsFacebook className="text-white text-sm hover:text-blue-300 transition-colors" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                                <BsYoutube className="text-white text-sm hover:text-red-300 transition-colors" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                                <BsInstagram className="text-white text-sm hover:text-pink-300 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'shadow-2xl border-b border-gray-200/50' : 'shadow-lg'}`}>
                <div className="max-w-8xl mx-auto px-4">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img src="/logo.jpg" alt="Mount Summit World School" className="w-24 h-24 object-contain" />
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent leading-tight">
                                    Mount Summit World School
                                </h1>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <p className="text-gray-600 text-xs font-medium tracking-wide">ShivChowk, Sunsari</p>
                                </div>
                            </div>
                        </div>

                        {/* Menu always visible on all screen sizes */}
                        <div className="flex items-center gap-4">
                            {["Home", "About", "Academics", "Admissions", "Faculty", "Events", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="py-2 px-1 font-semibold text-gray-900 hover:text-blue-600"
                                >
                                    {item}
                                </a>
                            ))}

                           
                        </div>

                    </div>
                </div>
            </nav>


            {/* Scrolling Ticker */}
            <div className="bg-blue-400 text-white py-2 overflow-hidden relative">
                <div className="whitespace-nowrap animate-scroll">
                    <span className="mx-4">
                        Welcome to Mount Summit World School! Admissions Open for 2025 | Call Now: 9852042044, 9862012750
                    </span>
                    <span className="mx-4">
                        Providing Quality Education for Every Student | PAN: 202378977 | REG NO: 2201
                    </span>
                </div>
            </div>

            {/* Scroll Animation */}
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-scroll {
                    display: inline-block;
                    animation: scroll 20s linear infinite;
                }
                `}
            </style>
        </>
    );
};

export default Navbar;
