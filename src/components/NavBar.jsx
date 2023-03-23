import { Link } from "react-router-dom";
import NavLinks from "../constants/NavLinks.js";

const NavBar = () => {
  const NavBarLinks = () =>
    NavLinks.map((link, index) => {
      return (
        <li key={index}>
          <Link
            to={link.link}
            className="relative block p-1 px-5 hover:text-emerald-700 "
          >
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <ul className="flex items-center rounded-full shadow-lg dark:bg-zinc-800 dark:ring-1 dark:ring-white/10">
      <NavBarLinks />
    </ul>
  );
};

export default NavBar;
