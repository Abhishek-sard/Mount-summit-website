import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white pt-12">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* About */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">About Us</h3>
        <p>
          Mount Summit World School is dedicated to providing quality education and fostering holistic development in students since 2054.
        </p>
        <div className="flex gap-3 mt-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-transform hover:-translate-y-1 hover:scale-110"
            >
              <Icon className="text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">Quick Links</h3>
        <ul className="flex flex-col gap-2">
          {['Home', 'About Us', 'Academics', 'Admissions', 'Faculty', 'Events'].map(link => (
            <li key={link} className="flex items-center gap-2">
              <FaChevronRight /> <a href="#" className="hover:pl-2 transition-all">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Academics */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">Academics</h3>
        <ul className="flex flex-col gap-2">
          {['Primary School', 'Middle School', 'High School', 'Curriculum', 'Library', 'Laboratories'].map(link => (
            <li key={link} className="flex items-center gap-2">
              <FaChevronRight /> <a href="#" className="hover:pl-2 transition-all">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">Contact Info</h3>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex gap-2 items-start">
            <FaMapMarkerAlt className="mt-1 text-white" />
            <div>Ramdhuni-1, Shiv Chowk, Sunsari, Nepal</div>
          </li>
          <li className="flex gap-2 items-start">
            <FaPhone className="mt-1 text-white" />
            <div>9852042044, 98622012750</div>
          </li>
          <li className="flex gap-2 items-start">
            <FaEnvelope className="mt-1 text-white" />
            <div>mountsummitworldschool01@gmail.com</div>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
    <div className="max-w-6xl mx-auto px-4 mt-12 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-200 text-sm gap-2 md:gap-0">
      <p>&copy; 2025 Powered by Abhishek Sardar. All rights reserved.</p>
      <div className="flex gap-4 flex-wrap justify-center md:justify-end">
        {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(link => (
          <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
