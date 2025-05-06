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
      className={`text-white font-Dm-sans px-6 md:px-20 py-10 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Logo"
            className="w-40 h-40 object-cover ml-8 mb-4"
          />
        </div>
        <div className="flex flex-col">
          <div className="space-y-2 text-lg mt-12">
            <div className="flex items-center gap-4 mb-4">
              <MdLocationOn className="text-[#F69005] w-7 h-7" />
              <span>
                1 Sarsfield Lane, Limerick,
                <br /> City Centre, Limerick, Ireland
              </span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <MdEmail className="text-[#F69005] w-7 h-7 " />
              <span>support@galaxon.com</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <MdPhone className="text-[#F69005] w-7 h-7 " />
              <span>+1 987-654-8948</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[#F69005] text-2xl font-medium mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-lg font-normal">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
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
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[#F69005] text-2xl font-medium mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-lg font-normal">
            <li className="flex items-center gap-4">
              <FaFacebookF className="text-[#F69005] text-xl" /> Facebook
            </li>
            <li className="flex items-center gap-4">
              <FaInstagram className="text-[#F69005] text-xl" /> Instagram
            </li>
            <li className="flex items-center gap-4">
              <FaLinkedinIn className="text-[#F69005] text-xl" /> LinkedIn
            </li>
            <li className="flex items-center gap-4">
              <FaYoutube className="text-[#F69005] text-xl" /> YouTube
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
}
