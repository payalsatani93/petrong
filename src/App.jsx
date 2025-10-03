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


function App() {
  
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/Expertise" element={<Expertise/>} />
        <Route path="/Contact" element={<Contact />} />        
        <Route path="/Blog" element={<Blog/>} />


      </Routes>
      <Nextlevel/>
      <Footer/>
    </Router>
  );
}

export default App;
