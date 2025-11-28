import { useState, useEffect } from "react";
import {
    CgMail,
    CgPhone
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Preloader timer
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

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
                {/* Logo Image Only */}
                <div className="flex items-center justify-center">
                    <img
                        src="/logo.jpg"
                        alt="Mount Summit World School Logo"
                        className="w-52 h-52 object-contain animate-pulse"
                    />
                </div>

                {/* Loading Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    <div className="w-3 h-3 bg-blue-600 animate-bounce"></div>
                    <div className="w-3 h-3 bg-green-600 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-indigo-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );

    if (loading) {
        return <Preloader />;
    }

    return (
        <>
            {/* Top Info Bar - Modern Design */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 text-white relative z-50">
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>

                <div className="relative max-w-8xl mx-auto px-4 py-2">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
                        {/* Left Section - Contact Info */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            {/* Email */}
                            <div className="flex items-center gap-2 group">
                                <div className="p-1.5 bg-blue-700/30 rounded-lg group-hover:bg-blue-600/50 transition-all duration-300">
                                    <CgMail className="text-blue-200 text-sm" />
                                </div>
                                <span className="text-blue-100 text-xs sm:text-sm font-medium tracking-wide">
                                    mountsummitworldschool01@gmail.com
                                </span>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-2 group">
                                <div className="p-1.5 bg-green-700/30 rounded-lg group-hover:bg-green-600/50 transition-all duration-300">
                                    <BsTelephoneFill className="text-green-200 text-xs" />
                                </div>
                                <span className="text-blue-100 text-xs sm:text-sm font-medium tracking-wide">
                                    9852042044, 9862012750
                                </span>
                            </div>
                        </div>

                        {/* Right Section - Official Info & Social */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            {/* Official Badges */}
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

                            {/* Social Media */}
                            <div className="flex items-center gap-2">
                                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group">
                                    <BsFacebook className="text-white text-sm group-hover:text-blue-300 transition-colors" />
                                </a>
                                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group">
                                    <BsYoutube className="text-white text-sm group-hover:text-red-300 transition-colors" />
                                </a>
                                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group">
                                    <BsInstagram className="text-white text-sm group-hover:text-pink-300 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar - Modern Design */}
         {/* Main Navigation Bar - Modern Design */}
<nav className={`bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'shadow-2xl border-b border-gray-200/50' : 'shadow-lg'
    }`}>
    <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                {/* Simple Logo Image - No Gap */}
                <img
                    src="/logo.jpg"
                    alt="Mount Summit World School"
                    className="w-24 h-24 object-contain m-0 p-0"
                />

                {/* School Name */}
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent leading-tight">
                        Mount Summit World School
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <p className="text-gray-600 text-xs font-medium tracking-wide">
                            ShivChowk, Sunsari
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-8">
                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    {[
                        { name: "Home", href: "/", active: true },
                        { name: "About", href: "/about" },
                        { name: "Academics", href: "/academics", hasDropdown: true },
                        { name: "Admissions", href: "/admissions" },
                        { name: "Faculty", href: "/faculty" },
                        { name: "Events", href: "/events" },
                        { name: "Contact", href: "/contact" }
                    ].map((item) => (
                        <div key={item.name} className="relative group">
                            <a
                                href={item.href}
                                className={`flex items-center gap-1 py-2 px-1 font-semibold transition-all duration-300 ${item.active
                                    ? 'text-blue-700'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                {item.name}
                                {item.hasDropdown && (
                                    <HiChevronDown className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                                )}
                            </a>

                            {/* Animated Underline */}
                            <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full ${item.active ? 'w-full' : ''
                                }`}></div>

                            {/* Dropdown Indicator */}
                            {item.hasDropdown && (
                                <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Button - Modern Design */}
                <button className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-70 group-hover:opacity-100"></div>
                    <div className="relative bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        <span>Apply Now</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="xl:hidden p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300 group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <HiX className="text-gray-700 text-xl group-hover:text-blue-600 transition-colors" />
                ) : (
                    <HiMenu className="text-gray-700 text-xl group-hover:text-blue-600 transition-colors" />
                )}
            </button>
        </div>
    </div>

    {/* Mobile Navigation Menu */}
    {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-2xl">
            <div className="max-w-8xl mx-auto px-4 py-4">
                <div className="flex flex-col space-y-3">
                    {[
                        "Home", "About", "Academics", "Admissions",
                        "Faculty", "Events", "Contact"
                    ].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="py-3 px-4 text-gray-700 hover:text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 border-l-4 border-transparent hover:border-blue-500"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}

                    {/* Mobile CTA Button */}
                    <button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    )}
</nav>

            {/* Content Spacer */}
            <div className="pt-4">
                {/* Your page content goes here */}
            </div>
        </>
    );
};

export default Navbar;