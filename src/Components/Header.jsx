import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Featured Artist", path: "/featured-artist" },
    { title: "Gailearaí", path: "/gallery" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="relative z-10 hidden md:flex justify-center font-Dm-sans">
        <div className="flex gap-16 px-10 py-2 rounded-full border items-center justify-center border-gray-500/80 backdrop-blur-md bg-[#00000080]">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative text-[#F69005] text-xl font-normal after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#F69005] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-white text-black hover:text-[#ffffff] border border-transparent hover:border-[#F69005] text-lg font-semibold px-4 py-1 rounded-full hover:bg-[#00000080] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden relative z-20 px-4 py-2 flex items-center justify-end">
        {/* <h1 className="text-[#F69005] text-xl font-bold">Logo</h1> */}
        <button onClick={toggleMobileMenu} className="text-[#F69005] text-3xl">
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 z-10 bg-[#000000cc] backdrop-blur-md p-4 flex flex-col items-center gap-2">
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
