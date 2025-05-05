import React from "react";
import { Link } from "react-router-dom"; // Important!

function Header() {
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Featured Artist", path: "/featured-artist" },
    { title: "Gallery", path: "/gallery" },
  ];

  return (
    <div className="relative z-10 flex justify-center">
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
  );
}

export default Header;
