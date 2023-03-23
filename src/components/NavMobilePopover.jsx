import { Link } from "react-router-dom";
import { X, GitHub, Linkedin } from "react-feather";
import NavLinks from "../constants/NavLinks.js";

const NavMobilePopover = ({ navOpen, handleNavOpen, darkMode }) => {
  const PopoverNavLinks = () =>
    NavLinks.map((link, index) => {
      return (
        <li key={index} className="py-1">
          <Link
            to={link.link}
            className="relative block rounded-full py-3 text-center "
            onClick={() => handleNavOpen()}
          >
            {link.name}
          </Link>
        </li>
      );
    });

  const PopoverContactLinks = () => {
    return [
      <li className="py-1" key="c-1">
        <a
          href="https://www.github.com/jomonty"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center py-3"
          onClick={() => handleNavOpen()}
        >
          <GitHub color="rgb(21 128 61)" />
        </a>
      </li>,
      <li className="py-1" key="c-2">
        <a
          href="https://www.linkedin.com/in/josh-montgomery-203663111/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center py-3"
          onClick={() => handleNavOpen()}
        >
          <Linkedin color="rgb(21 128 61)" />
        </a>
      </li>,
    ];
  };

  return (
    <div>
      <div
        className={`fixed inset-0 z-0 bg-zinc-800/40 opacity-100 backdrop-blur-sm ${
          !navOpen ? " hidden" : ""
        }`}
        onClick={() => handleNavOpen()}
      ></div>
      <div
        className={`fixed inset-x-4 top-20 z-10 rounded-3xl  bg-white p-5 transition duration-300 dark:bg-zinc-800 dark:ring-1 dark:ring-white/10 ${
          !navOpen
            ? " -translate-y-full scale-50 opacity-0"
            : " translate-y-0 scale-100 opacity-100"
        }`}
      >
        <div className="flex flex-row items-center justify-between">
          <h2 className="dark: text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
          <button className="-m-1 p-1" onClick={() => handleNavOpen()}>
            <X color={darkMode ? "rgb(161 161 170" : "rgb(82 82 91)"} />
          </button>
        </div>
        <ul className="divide-y divide-zinc-100 dark:divide-zinc-100/5">
          <PopoverNavLinks />
          <PopoverContactLinks />
        </ul>
      </div>
    </div>
  );
};
export default NavMobilePopover;
