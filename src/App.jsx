import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Tech from "./containers/Tech";
import Articles from "./containers/Articles";

function App() {
  const [navPopoverOpen, setNavPopoverOpen] = useState();
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const openPopoverNav = () => {
    setNavPopoverOpen(true);
  };

  const closePopoverNav = () => {
    setNavPopoverOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const root = window.document.documentElement;
    root.classList.toggle("dark");
  };

  window.onresize = function () {
    var w = window.outerWidth;
    if (w > 768) {
      closePopoverNav();
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="fixed inset-0 -z-10 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900  dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <Header
        navPopoverOpen={navPopoverOpen}
        openPopoverNav={openPopoverNav}
        closePopoverNav={closePopoverNav}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/articles/:id" element={<Articles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
