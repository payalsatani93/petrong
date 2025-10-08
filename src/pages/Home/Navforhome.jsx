import React, { useState } from "react";

export default function Navforhome() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu

  return (
    <>
      {/* Navbar */}
      <nav className="w-full z-50 bg-transparent flex justify-end items-center px-10 py-10 lg:right-50 md:right-20 absolute">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:text-[20px] md:text-[15px] text-white font-poppins">
          <li className="hover:text-green-400 cursor-pointer">ABOUT</li>
          <li className="hover:text-green-400 cursor-pointer">PORTFOLIO</li>
          <li className="hover:text-green-400 cursor-pointer">PRODUCT</li>
          <li className="hover:text-green-400 cursor-pointer">EXPERTISE</li>
          <li className="hover:text-green-400 cursor-pointer">CONTACT</li>
          <li className="hover:text-green-400 cursor-pointer">BLOG</li>
        </ul>

        {/* Mobile Hamburger Button */}
        {isOpen ? (
          // Cross Button
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white focus:outline-none"
          >
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
          </button>
        ) : (
          // Hamburger Button
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white focus:outline-none"
          >
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
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-6 font-medium md:hidden z-40 text-white mt-2">
          {["ABOUT", "PORTFOLIO", "PRODUCT", "EXPERTISE", "CONTACT", "BLOG"].map(
            (item) => (
              <li
                key={item}
                className="hover:text-green-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
}
