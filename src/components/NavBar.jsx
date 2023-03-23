import { Link } from "react-router-dom";
import NavLinks from "../constants/NavLinks.js";

const NavBar = () => {
  const NavBarLinks = () =>
    NavLinks.map((link, index) => {
      return (
        <li key={index}>
          <Link
            to={link.link}
            className="relative block p-1 px-5 hover:text-emerald-600"
          >
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <ul className="flex items-center rounded-full border border-slate-200 text-slate-700 shadow-md">
      <NavBarLinks />
    </ul>
  );
};

export default NavBar;
