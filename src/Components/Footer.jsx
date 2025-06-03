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
      <footer  className={`text-white font-Dm-sans px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 py-10 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="md:w-1/3 w-full">
          <img
            src={logo}
            alt="Sisu Eclipse"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3 w-full text-sm space-y-4 items-center justify-center text-center">
          <p>📍 Dublin, Ireland</p>
          <p>📧 sisu@sidus-eclipse.com</p>
          <p>📞 +353 83 874 2235</p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 w-full text-sm">
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">About us</a></li>
            <li><a href="#" className="hover:text-orange-400">Exclusive</a></li>
            <li><a href="#" className="hover:text-orange-400">Featured artists</a></li>
            <li><a href="#" className="hover:text-orange-400">Available arts</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 space-x-4">
        <a href="#" className="hover:text-orange-400">Privacy Policy</a>
        <a href="#" className="hover:text-orange-400">Terms of Service</a>
      </div>
    </footer>
  );
}
  