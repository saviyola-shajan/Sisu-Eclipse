import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Featured Artists", path: "/featured-artist" },
    { title: "Exclusive Art", path: "/gallery" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="relative z-10 hidden md:flex justify-center font-Dm-sans">
        <div className="flex gap-24 px-10 py-2 items-center justify-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative text-[#ffffff] text-xl font-normal group"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ffffff] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-[#ffffff] border border-transparent hover:border-[#F69005] text-xl font-normal px-4 py-1 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-2 flex items-center justify-end bg-[#00000080] backdrop-blur-md">
        <button onClick={toggleMobileMenu} className="text-[#F69005] text-3xl">
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-10 left-0 right-0 z-40 bg-[#00000080] backdrop-blur-md p-4 flex flex-col items-center gap-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#F69005] text-lg font-medium"
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-white text-black hover:text-white border border-transparent hover:border-[#F69005] text-base font-semibold px-4 py-1 rounded-full hover:bg-[#00000080] transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;
