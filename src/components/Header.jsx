import { Link } from "react-router-dom";

import { X, Menu, GitHub, Linkedin } from "react-feather";

import NavBar from "./NavBar.jsx";
import NavMobile from "./NavMobile.jsx";

const Header = ({ navOpen, handleNavOpen }) => {
  return (
    <header className="flex flex-col font-Lato">
      <div className="my-6 mx-auto flex h-[10vh] w-[85vw] place-content-between md:h-[15vh]">
        <img
          src="./logo-low-trans-svg.svg"
          className={`relative pl-5 ${navOpen ? "blur" : ""}`}
        />

        <div className="pr-15 hidden items-center justify-center md:flex">
          <NavBar />
        </div>
        <button
          className="relative z-20 rounded-full md:hidden"
          onClick={() => handleNavOpen()}
        >
          <div>
            {navOpen ? <X color="white" /> : <Menu color="rgb(21 128 61)" />}
          </div>
        </button>

        <div
          className={`fixed top-0 right-0 z-10 flex h-full w-[40vw] flex-row justify-center bg-green-700 py-32 px-5 text-white duration-300 ease-in-out ${
            !navOpen ? " translate-x-full" : " translate-x-0"
          }`}
        >
          <NavMobile handleNavOpen={handleNavOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
