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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="md:w-1/3 w-full">
          <img
            src={logo}
            alt="Sisu Eclipse"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3 w-full space-y-4 text-center text-lg font-normal">
          <p className="flex items-center justify-center space-x-2">
            <MdLocationOn className="text-orange-400" />
            <span>Dublin, Ireland</span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <MdEmail className="text-orange-400" />
            <span>sisu@sidus-eclipse.com</span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <MdPhone className="text-orange-400" />
            <span>+353 83 874 2235</span>
          </p>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/3 w-full text-sm text-center md:text-left">
          <h3 className="text-2xl font-medium mb-4 text-orange-400">
            Quick links
          </h3>
          <ul className="space-y-2 text-lg font-normal">
               <li>
              <Link to="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400">
                About us
              </Link>
            </li>
            <li>
              <Link to="/featured-artist" className="hover:text-orange-400">
                Featured artists
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-orange-400">
                Gailearaí
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6" />

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 space-x-4">
        <Link to="/privacy-policy" className="hover:text-orange-400">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="hover:text-orange-400">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
