import { useState, useEffect } from "react";
import { CgMail } from "react-icons/cg";
import { BsFacebook, BsYoutube, BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const timer = setTimeout(() => setLoading(false), 2500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <div className="w-3 h-3 bg-green-600 animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-indigo-600 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );

  if (loading) return <Preloader />;

  const navItems = ["Home", "About", "Academics", "Admissions", "Faculty", "Events", "Contact"];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-700/30 rounded-lg">
                <CgMail className="text-blue-200 text-sm" />
              </div>
              <span>mountsummitworldschool01@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-green-700/30 rounded-lg">
                <BsTelephoneFill className="text-green-200 text-sm" />
              </div>
              <span>9852042044, 9862012750</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                <span>PAN: 202378977</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                <span>REG NO: 2201</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="p-2 bg-white/10 rounded-lg">
                <BsFacebook className="text-white text-sm" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg">
                <BsYoutube className="text-white text-sm" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg">
                <BsInstagram className="text-white text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all duration-500 ${scrolled ? "shadow-2xl border-b border-gray-200/50" : "shadow-lg"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="School Logo" className="w-20 h-20 object-contain" />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent leading-tight">
                  Mount Summit World School
                </h1>
                <p className="text-gray-600 text-xs">ShivChowk, Sunsari</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item} href="#" className="font-semibold text-gray-900 hover:text-blue-600">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                {isMenuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 border-t border-gray-200 shadow-md">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="py-2 px-3 font-semibold text-gray-900 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Scrolling Ticker */}
      <div className="bg-blue-700 text-white py-2 overflow-hidden relative">
        <div className="whitespace-nowrap animate-scroll">
          <span className="mx-4">
            Welcome to Mount Summit World School! Admissions Open for 2025 | Call Now: 9852042044, 9862012750
          </span>
          <span className="mx-4">
            Providing Quality Education for Every Student | PAN: 202378977 | REG NO: 2201
          </span>
        </div>
      </div>

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
