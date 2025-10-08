import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import Navbar from "./pages/About/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navforhome from "./pages/Home/Navforhome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <>
              <Navforhome/>
              <Home/>
            </>
          }/>
        <Route
          path="/About"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <>
              <Navbar />
              <Portfolio />
            </>
          }
        />
        <Route
          path="/Product"
          element={
            <>
              <Navbar />
              <Product />
            </>
          }
        />
        <Route
          path="/Expertise"
          element={
            <>
              <Navbar />
              <Expertise />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route
          path="/Blog"
          element={
            <>
              <Navbar />
              <Blog />
            </>
          }
        />
        <Route
          path="/blog-single"
          element={
            <>
              <Navbar />
              <BlogSingle />
            </>
          }
        />
        <Route
          path="/enjoy-holiday"
          element={
            <>
              <Navbar />
              <EnjoyHoliday />
            </>
          }
        />
        <Route
          path="/design-effect"
          element={
            <>
              <Navbar />
              <Designeffect />
            </>
          }
        />
      </Routes>

      <Nextlevel />
      <Footer />
    </Router>
  );
}

export default App;
