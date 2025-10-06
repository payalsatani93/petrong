// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/About/Navbar";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Expertise from "./pages/Expertise/Expertise";
import Nextlevel from "./pages/About/Nextlevel";
import Footer from "./pages/About/Footer";
import Blog from "./pages/Blog/Blog";
import Product from "./pages/Product/Product";

import BlogSingle from "./pages/Blog/UXUISlider1";
import EnjoyHoliday from "./pages/Blog/EnjoyHolidayslider2";
import Designeffect from "./pages/Blog/designeffectslider3";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Expertise" element={<Expertise />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/enjoy-holiday" element={<EnjoyHoliday />} />
        <Route path="/design-effect" element={<Designeffect />} />
      </Routes>
      <Nextlevel />
      <Footer />
    </Router>
  );
}

export default App;
