import React, { useState } from "react";

export default function Navforhome() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  // Menu items with page links
  const menuItems = [
    { name: "ABOUT", link: "/About" },
    { name: "PORTFOLIO", link: "/Portfolio" },
    { name: "PRODUCT", link: "/Product" },
    { name: "EXPERTISE", link: "/Expertise" },
    { name: "CONTACT", link: "/Contact" },
    { name: "BLOG", link: "/Blog" },
  ];

  return (
   <div>
      {/* Navbar */}
      <nav className="bg-transparent p-8 text-white z-50   lg:flex lg:justify-end lg:right-50  w-full absolute">
        <div className="flex justify-between items-center">

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 p-4 text-white">
           
            <li>
              <a href="/About">ABOUT</a>
            </li>
            <li>
              <a href="/Portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="/Product">PRODUCT</a>
            </li>
            <li>
              <a href="/Expertise">EXPERTISE</a>
            </li>
            <li>
              <a href="/Contact">CONTACT</a>
            </li>
            <li>
              <a href="/Blog">BLOG</a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? (
              // Cross icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-3 text-white bg-slate-800 p-4 rounded-lg">
            
            <li>
              <a href="/About">ABOUT</a>
            </li>
            <li>
              <a href="/Portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="/Product">PRODUCT</a>
            </li>
            <li>
              <a href="/Expertise">EXPERTISE</a>
            </li>
            <li>
              <a href="/Contact">CONTACT</a>
            </li>
            <li>
              <a href="/Blog">BLOG</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
