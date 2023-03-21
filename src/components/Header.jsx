import { Link } from "react-router-dom";
import { useState } from "react";

import { X, Menu } from "react-feather";

const Header = () => {
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
    <header className="container mx-auto flex-row border py-8 font-Lato">
      <div className="w-1/12">
        <img src="./public/logo-low-trans-svg.svg" className=""></img>
      </div>

      <div className="hidden justify-center md:flex">
        <nav className="">
          <ul className="flex rounded-full border border-slate-200 p-1  px-3 text-slate-700 shadow-md">
            <li>
              <Link
                to="/"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/tech"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                Tech
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-end p-2 pr-6 sm:hidden ">
        {/* {navOpen ?
            <button className="" onClick={() => handleNavOpen()}><X /></button>
        :
            <button className="" onClick={() => handleNavOpen()}><Menu /></button>
        } */}
        <button
          className="rounded-full border p-3"
          onClick={() => handleNavOpen()}
        >
          {navOpen ? <X /> : <Menu />}
        </button>
        <nav></nav>
      </div>
    </header>
  );
};

export default Header;
