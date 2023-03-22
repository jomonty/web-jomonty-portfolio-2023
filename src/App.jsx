import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import Tech from "./containers/Tech";

function App() {
  const [navOpen, setNavOpen] = useState();

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
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
      <Header navOpen={navOpen} handleNavOpen={handleNavOpen} />
      <Routes>
        <Route path="/" element={<Home navOpen={navOpen} />} />
        <Route path="/contact" element={<Contact navOpen={navOpen} />} />
        <Route path="/projects" element={<Projects navOpen={navOpen} />} />
        <Route path="/tech" element={<Tech navOpen={navOpen} />} />
      </Routes>
    </Router>
  );
}

export default App;
