import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/images/sisuLogo.png";
import { Link } from "react-router-dom";

export default function Footer({
  className = "bg-gradient-to-b from-[#7b2c18] to-[#1b0d23]",
}) {
  return (
    <footer
      className={`text-white font-Dm-sans px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 py-10 ${className}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Logo"
            className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto object-contain mb-4"
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="space-y-2 text-base sm:text-lg mt-4 sm:mt-6 md:mt-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mb-4">
              <MdLocationOn className="text-[#F69005] w-6 sm:w-7 h-6 sm:h-7" />
              <span>
                1 Sarsfield Lane, Limerick,
                <br /> City Centre, Limerick, Ireland
              </span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <MdEmail className="text-[#F69005] w-6 sm:w-7 h-6 sm:h-7" />
              <span>support@galaxon.com</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <MdPhone className="text-[#F69005] w-6 sm:w-7 h-6 sm:h-7" />
              <span>+1 987-654-8948</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#F69005] text-xl sm:text-2xl font-medium mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-base sm:text-lg font-normal">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/featured-artist" className="hover:underline">
                Featured Artist
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gailearaí
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#F69005] text-xl sm:text-2xl font-medium mb-3 sm:mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-base sm:text-lg font-normal">
            <li className="flex items-center gap-4">
              <FaFacebookF className="text-[#F69005] text-lg sm:text-xl" /> Facebook
            </li>
            <li className="flex items-center gap-4">
              <FaInstagram className="text-[#F69005] text-lg sm:text-xl" /> Instagram
            </li>
            <li className="flex items-center gap-4">
              <FaLinkedinIn className="text-[#F69005] text-lg sm:text-xl" /> LinkedIn
            </li>
            <li className="flex items-center gap-4">
              <FaYoutube className="text-[#F69005] text-lg sm:text-xl" /> YouTube
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-xs sm:text-sm text-gray-400 space-y-2 sm:space-y-0 text-center">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
}
  