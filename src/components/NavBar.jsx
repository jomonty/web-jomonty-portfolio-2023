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
            className={`relative block p-1 px-5 hover:text-logoprimary ${
              location.pathname === link.link ? "text-logoprimary" : ""
            }`}
          >
            {link.name}
            <span
              className={`absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-logoprimary/0 via-logoprimary/80 to-logoprimary/0 ${
                location.pathname === link.link ? "" : "hidden"
              }`}
            ></span>
          </Link>
        </li>
      );
    });

  return (
    <nav>
      <ul className="flex items-center rounded-full shadow-lg dark:bg-zinc-800 dark:ring-1 dark:ring-white/10">
        <NavBarLinks />
      </ul>
    </nav>
  );
};

export default NavBar;
