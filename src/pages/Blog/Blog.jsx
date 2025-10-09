import React from "react";
import Bloghero from "../Blog/Blog-hero.jsx";
import Mobliedevelopment from "../Blog/MobileDevelopment.jsx";
import Webdevlopment from "../Blog/WebDevelopment.jsx";
import Digitalmarketing from "../Blog/DigitalMarketing.jsx";
import Navbar from "../About/Navbar.jsx";



export default function Blog() {
  return (
    <div>
      <Navbar/>
      <Bloghero />
      <Mobliedevelopment />
      <Digitalmarketing />
      <Webdevlopment />
    </div>
  );
}
