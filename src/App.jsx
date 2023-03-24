import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Tech from "./containers/Tech";

function App() {
  const [navOpen, setNavOpen] = useState();
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const root = window.document.documentElement;
    root.classList.toggle("dark");
  };

  window.onresize = function () {
    var w = window.outerWidth;
    if (w > 768) {
      setNavOpen(false);
    }
  };

  return (
    <Router>
      <div className="fixed inset-0 -z-10 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-zinc-100 dark:bg-zinc-900  dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <Header
        navOpen={navOpen}
        handleNavOpen={handleNavOpen}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={<Home navOpen={navOpen} />} />
        <Route
          path="/about"
          element={<About navOpen={navOpen} handleNavOpen={handleNavOpen} />}
        />
        <Route path="/projects" element={<Projects navOpen={navOpen} />} />
        <Route path="/tech" element={<Tech navOpen={navOpen} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
