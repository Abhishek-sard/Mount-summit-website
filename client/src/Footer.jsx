import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white pt-12">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">About Us</h3>
        <p>Bright Future School is dedicated to providing quality education and fostering holistic development in students since 1985.</p>
        <div className="flex gap-3 mt-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-transform hover:-translate-y-1">
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">Quick Links</h3>
        <ul className="flex flex-col gap-2">
          {['Home', 'About Us', 'Academics', 'Admissions', 'Faculty', 'Events'].map(link => (
            <li key={link} className="flex items-center gap-2">
              <FaChevronRight /> <a href="#" className="hover:pl-1 transition-all">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">Academics</h3>
        <ul className="flex flex-col gap-2">
          {['Primary School', 'Middle School', 'High School', 'Curriculum', 'Library', 'Laboratories'].map(link => (
            <li key={link} className="flex items-center gap-2">
              <FaChevronRight /> <a href="#" className="hover:pl-1 transition-all">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">Contact Info</h3>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2">
            <FaMapMarkerAlt className="mt-1"/> <div>123 Education Street, Knowledge City, KC 12345</div>
          </li>
          <li className="flex gap-2">
            <FaPhone className="mt-1"/> <div>+1 (123) 456-7890, +1 (123) 456-7891</div>
          </li>
          <li className="flex gap-2">
            <FaEnvelope className="mt-1"/> <div>info@brightfutureschool.edu, admissions@brightfutureschool.edu</div>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 mt-12 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between text-gray-200 text-sm gap-4">
      <p>&copy; 2023 Bright Future School. All rights reserved.</p>
      <div className="flex gap-4">
        {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(link => (
          <a key={link} href="#" className="hover:text-white">{link}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
