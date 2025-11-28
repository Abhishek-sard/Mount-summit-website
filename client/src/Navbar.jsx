import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <img src="/logo.jpg" alt="Logo" className="w-52 h-52 object-contain animate-pulse" />
      </div>
    </div>
  );

  if (loading) return <Preloader />;

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Academics", link: "/academics" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" }
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <CgMail /> <span>mountsummitworldschool01@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <BsTelephoneFill /> <span>9852042044, 9862012750</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BsFacebook /><BsYoutube /><BsInstagram />
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all duration-500 ${
          scrolled ? "shadow-2xl border-b border-gray-200/50" : "shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.jpg" alt="School Logo" className="w-20 h-20 object-contain" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Mount Summit World School
                </h1>
                <p className="text-gray-600 text-xs">ShivChowk, Sunsari</p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="font-semibold text-gray-900 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md bg-gray-100"
            >
              {isMenuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 border-t border-gray-200 shadow-md">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="py-2 px-3 font-semibold text-gray-900 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* SCROLLING TICKER */}
      <div className="bg-blue-700 text-white py-2 overflow-hidden relative">
        <div className="whitespace-nowrap animate-scroll">
          <span className="mx-4">
            Welcome to Mount Summit World School! Admissions Open for 2025 | Call: 9852042044
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
          animation: scroll 20s linear infinite;
        }
        `}
      </style>
    </>
  );
};

export default Navbar;
