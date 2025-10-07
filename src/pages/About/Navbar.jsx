import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [showChat, setShowChat] = useState(false); // For chat box visibility

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-slate-950 p-2 shadow-md   w-full ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src="/Image/Logo.png" alt="logo" className="h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 p-4 text-white">
            <li><a href="/">HOME</a></li>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Portfolio">PORTFOLIO</a></li>
            <li><a href="/Product">PRODUCT</a></li>
            <li><a href="/Expertise">EXPERTISE</a></li>
            <li><a href="/Contact">CONTACT</a></li>
            <li><a href="/Blog">BLOG</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-3 text-white bg-slate-800 p-4 rounded-lg">
            <li><a href="/">HOME</a></li>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Portfolio">PORTFOLIO</a></li>
            <li><a href="/Product">PRODUCT</a></li>
            <li><a href="/Expertise">EXPERTISE</a></li>
            <li><a href="/Contact">CONTACT</a></li>
            <li><a href="/Blog">BLOG</a></li>
          </ul>
        )}
      </nav>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition z-40"
      >
        {/* Chat Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {showChat ? (
            // Close (X)
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Chat Bubble
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h8m-8 4h5m-9 5v-2a9 9 0 1118 0v2a9 9 0 01-9 9H6z"
            />
          )}
        </svg>
      </button>

      {/* Chat Box */}
      {showChat && (
        <div className="fixed bottom-20 right-6 bg-white w-80 rounded-2xl shadow-lg overflow-hidden z-40">
          {/* Header */}
          <div className="bg-green-500 text-white p-3 font-semibold flex justify-between items-center">
            Chat with Us
            <button onClick={() => setShowChat(false)}>✖</button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-64 overflow-y-auto text-gray-700 space-y-3">
            <div className="bg-gray-100 p-2 rounded-lg w-fit">Hello! 👋</div>
            <div className="bg-green-100 p-2 rounded-lg w-fit ml-auto">
              Hi! I’d like to know more.
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 outline-none"
            />
            <button className="bg-green-500 text-white px-4">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
