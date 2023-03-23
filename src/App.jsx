import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import Tech from "./containers/Tech";

function App() {
  const [navOpen, setNavOpen] = useState();
  const [darkMode, setDarkMode] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const root = window.document.documentElement; //add 'dark class to html root element'
    root.classList.toggle("dark");
  };

  // closes mobile navbar when resizing back to desktop size
  window.onresize = function () {
    var w = window.outerWidth;
    if (w > 768) {
      setNavOpen(false);
    }
  };

  return (
    <Router>
      <div className="container mx-auto flex h-screen flex-col">
        <Header
          navOpen={navOpen}
          handleNavOpen={handleNavOpen}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route path="/" element={<Home navOpen={navOpen} />} />
          <Route path="/contact" element={<Contact navOpen={navOpen} />} />
          <Route path="/projects" element={<Projects navOpen={navOpen} />} />
          <Route path="/tech" element={<Tech navOpen={navOpen} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
