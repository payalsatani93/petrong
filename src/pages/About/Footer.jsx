import React from "react";
import { Link } from "react-router-dom"; // ✅ You forgot this import
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
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
          <h3 className="text-white  font-semibold text-[16px] mb-4" style={{ fontFamily: "var(--font-Montserra)" }}>QUICK LINKS</h3>
          <ul className="space-y-2 text-[13px] text-Montserrat text-gray-400">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Product", path: "/product" },
              { name: "Contact", path: "/contact" },
              { name: "Blog", path: "/blog" },
              { name: "Our Policy", path: "/policy" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-emerald-400 transition-colors "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-[16px] mb-4 "  style={{ fontFamily: "var(--font-Montserra)" }}>
            OUR SERVICES
          </h3>
          <ul className="space-y-2 text-[13px] text-gray-400">
            <li>Web Development</li>
            <li>Digital Product Design</li>
            <li>Cloud / DevOps</li>
            <li>Mobile Applications</li>
            <li>Dedicated Development Team</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-white font-semibold text-[16px] mb-4"  style={{ fontFamily: "var(--font-Montserra)" }}>
            OUR TECHNOLOGIES
          </h3>
          <ul className="space-y-2 text-[13px] text-gray-400">
            <li>Laravel Development</li>
            <li>React JS App Development</li>
            <li>Vue JS App Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-[16px] mb-4 "  style={{ fontFamily: "var(--font-Montserra)" }}>
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
              <FaYoutube />
            </a>
          </div>

          <p className="flex items-center space-x-2 text-[13px] sm:text-base">
            <FaPhoneAlt className="text-emerald-50" />
            <span>Phone: (234) 0800-000-0000</span>
          </p>
          <p className="flex items-center space-x-2 mt-2 text-sm sm:text-base text-emerald-400">
            <MdEmail className="text-emerald-50" />
            <span className="text-amber-50">E-mail:</span>{" "}
            info@petrongsolutions.com
          </p>

          <div className="mt-6">
            <img
              src="/Image/Logo.png"
              alt="Company Logo"
              className="h-12"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative text-start p-9 text-xs sm:text-sm text-gray-300 " style={{ fontFamily: "var(--font-Montserra)" }}>
        Petrong Software Solution Copyright 2022  - All Right Reserved
      </div>
    </footer>
  );
}
