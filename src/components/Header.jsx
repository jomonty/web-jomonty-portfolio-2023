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

  const Navigation = ({ ulClass, liClass, itemClass }) => {
    return (
      <ul className={ulClass}>
        <li className={liClass}>
          <Link to="/" className={itemClass}>
            Home
          </Link>
        </li>
        <li className={"hover:cursor-pointer " + itemClass}>Contact</li>
        {/* <li>
              <Link
                to="/about"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                About
              </Link>
            </li> */}
        <li>
          <Link to="/projects" className={itemClass}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/tech" className={itemClass}>
            Tech
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <header className="flex flex-col">
      <div className="container sticky top-0 mx-auto flex flex-row items-center justify-around py-8 font-Lato">
        <div className="flex w-1/3 items-center justify-center md:w-1/4">
          <img src="./public/logo-low-trans-svg.svg" className="w-1/3"></img>
        </div>

        <div className="hidden w-2/4 items-center justify-center md:flex">
          <Navigation
            ulClass="flex items-center rounded-full border border-slate-200 p-1 px-3 text-slate-700 shadow-md"
            itemClass="relative block p-1 px-3 hover:text-emerald-600"
          />
        </div>
        <div className="flex w-1/4 justify-end p-2 pr-6 md:hidden">
          <button className="rounded-full p-3" onClick={() => handleNavOpen()}>
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <Navigation
        ulClass={!navOpen ? "hidden " : "" + "right-0"}
        liClass="flex"
        itemClass="justify-self-end"
      />
    </header>
  );
};

export default Header;
