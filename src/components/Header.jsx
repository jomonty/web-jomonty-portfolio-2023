import { X, Sun } from "react-feather";

import NavBar from "./NavBar.jsx";
import NavMobile from "./NavMobile.jsx";

const Header = ({ navOpen, handleNavOpen }) => {
  return (
    <header className="py-6">
      <div className="mx-auto flex h-10 w-[85vw] place-content-center gap-4">
        <div className="flex flex-1">
          <img
            src="./logo-low-trans-svg.svg"
            className={`relative pl-5 ${navOpen ? "blur" : ""}`}
          />
        </div>
        <div className="flex flex-1 justify-end md:justify-center">
          <div className="hidden md:flex ">
            <NavBar />
          </div>
          <div className="flex rounded-full border py-2 px-3 shadow md:hidden">
            <button
              className="flex place-items-center text-slate-700"
              onClick={() => handleNavOpen()}
            >
              Menu
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end md:flex-1">
          <div className="flex rounded-full border py-2 px-3 shadow">
            <button>
              <Sun color="rgb(21 128 61)" />
            </button>
          </div>
        </div>
        <div>
          <div
            className={`fixed inset-0 z-0 bg-zinc-800/40 opacity-100 backdrop-blur-sm ${
              !navOpen ? " hidden" : ""
            }`}
          ></div>
          <div
            className={`fixed inset-x-4 top-20 z-10 rounded-3xl bg-white p-5 transition duration-300  ${
              !navOpen
                ? " -translate-y-full scale-50 opacity-0"
                : " translate-y-0 scale-100 opacity-100"
            }`}
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <button className="-m-1 p-1" onClick={() => handleNavOpen()}>
                <X color="rgb(82 82 91)" />
              </button>
              <h2 className="text-sm font-medium text-zinc-600">Navigation</h2>
            </div>
            <NavMobile handleNavOpen={handleNavOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
