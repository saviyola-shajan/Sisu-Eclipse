import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#7b2c18] to-[#1b0d23] text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/your-image-path.jpg" 
            alt="Logo" 
            className="w-24 h-24 object-cover rounded-md mb-4" 
          />
        </div>
        <div className="flex flex-col">
        <div className="space-y-2 text-sm mt-12">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-[#F69005] w-6 h-6" />
              <span>1 Sarsfield Lane, Limerick,<br/> City Centre, Limerick, Ireland</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-[#F69005] w-6 h-6" />
              <span>support@galaxon.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-[#F69005] w-6 h-6" />
              <span>+1 987-654-8948</span>
            </div>
          </div>
          </div>
        <div className="flex flex-col">
          <h3 className="text-[#F69005] font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Exclusive</a></li>
            <li><a href="#" className="hover:underline">Featured Artist</a></li>
            <li><a href="#" className="hover:underline">Available Arts</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[#F69005] font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaFacebookF className="text-[#F69005]"/> Facebook</li>
            <li className="flex items-center gap-2"><FaInstagram className="text-[#F69005]"/> Instagram</li>
            <li className="flex items-center gap-2"><FaLinkedinIn className="text-[#F69005]"/> LinkedIn</li>
            <li className="flex items-center gap-2"><FaYoutube className="text-[#F69005]"/> YouTube</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
}
