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
        <div className="md:w-1/3 w-full space-y-4 text-lg font-normal md:ml-20 text-center md:text-left flex flex-col items-center md:items-start">
          <p className="flex items-center space-x-4">
            <MdLocationOn className="h-6 w-6" />
            <span>Dublin, Ireland</span>
          </p>
          <p className="flex items-center space-x-4">
            <MdEmail className="h-6 w-6" />
            <span>sisu@sidus-eclipse.com</span>
          </p>
          <p className="flex items-center space-x-4">
            <MdPhone className="h-6 w-6" />
            <span>+353 83 874 2235</span>
          </p>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/3 w-full text-sm text-center md:text-left">
          <h3 className="text-2xl font-medium mb-4 text-[#F69005]">
            Quick links
          </h3>
          <ul className="space-y-2 text-lg font-normal">
            <li>
              <Link to="/about" className="hover:text-[#F69005]">
                About
              </Link>
            </li>
            <li>
              <Link to="/featured-artist" className="hover:text-[#F69005]">
                Featured Artists
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#F69005]">
                Exclusive Arts
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F69005]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
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
