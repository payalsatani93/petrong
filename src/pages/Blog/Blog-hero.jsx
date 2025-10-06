import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Blog() {
  return (
    <div>
      {/* Hero Image */}
      <div className="w-full">
        <img
          src="/Image/Bloghero.png"
          alt="Blog Hero"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Navigation + Search */}
      <div className="bg-white p-5 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          {/* Menu */}
          <ul className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-8 text-lg md:text-xl">
            <li className="text-emerald-500 underline">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">UIUX Design</a>
            </li>
            <li>
              <a href="#">World Wide Web</a>
            </li>
            <li>
              <a href="#">Mobile App World</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
          </ul>

          {/* Search Box */}
          <div className="relative flex flex-row justify-center items-center shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              className=" pl-2 pr-7 py-2 border border-gray-300 rounded-md"
            />
            <AiOutlineSearch className="h-10 w-10 p-2 bg-black text-emerald-500 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
