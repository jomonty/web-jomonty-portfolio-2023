import { Link, useLocation } from "react-router-dom";
import NavLinks from "../constants/NavLinks.js";

const NavBar = () => {
  const location = useLocation();
  const NavBarLinks = () =>
    NavLinks.map((link, index) => {
      return (
        <li key={index}>
          <Link
            to={link.link}
            className={`relative block py-2 px-5 hover:text-logoprimary ${
              location.pathname === link.link ? "text-logoprimary" : ""
            }`}
          >
            {link.name}
            <span
              className={`absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-logoprimary/80 to-transparent ${
                location.pathname === link.link ? "" : "hidden"
              }`}
            ></span>
          </Link>
        </li>
      );
    });

  return (
    <nav>
      <ul className="flex items-center rounded-full px-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800 dark:ring-white/10">
        <NavBarLinks />
      </ul>
    </nav>
  );
};

export default NavBar;
