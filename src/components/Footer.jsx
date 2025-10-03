import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube, // ✅ Added YouTube
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('/world-map.png')] bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Contact", "Blog", "Our Policy"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            OUR SERVICES
          </h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Digital Product Design</li>
            <li>Cloud / DevOps</li>
            <li>Mobile Applications</li>
            <li>Dedicated Development Team</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            OUR TECHNOLOGIES
          </h3>
          <ul className="space-y-2">
            <li>Laravel Development</li>
            <li>React JS App Development</li>
            <li>Vue JS App Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            CONTACT & FOLLOW US
          </h3>
          <div className="flex space-x-4 mb-4 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaYoutube /> {/* ✅ YouTube Icon */}
            </a>
          </div>

          <p className="flex items-center space-x-2 text-sm sm:text-base">
            <FaPhoneAlt className="text-emerald-50" />
            <span> Phone: (234) 0800-000-0000</span>
          </p>
          <p className="flex items-center space-x-2 mt-2 text-sm sm:text-base text-emerald-400">
            <MdEmail className="text-emerald-50" />
          <p><span className="text-amber-50"> E-mail:</span> info@petrongsolutions.com</p>  
          </p>

          <div className="mt-6">
            <img
              src="/Image/Logo.png" // 🔹 Replace with your logo path
              alt="Company Logo"
              className="h-12"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-700 text-center py-4 text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Petrong Software Solution - All Rights
        Reserved
      </div>
    </footer>
  );
}
