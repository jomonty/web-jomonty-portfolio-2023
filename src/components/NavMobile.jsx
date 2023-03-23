import { Link } from "react-router-dom";
import { GitHub, Linkedin } from "react-feather";
import NavLinks from "../constants/NavLinks.js";

const NavMobile = ({ handleNavOpen }) => {
  const PopoverNavLinks = () =>
    NavLinks.map((link, index) => {
      return (
        <li key={index} className="border-b py-1">
          <Link
            to={link.link}
            className="relative block rounded-full py-3 text-center text-zinc-700"
            onClick={() => handleNavOpen()}
          >
            {link.name}
          </Link>
        </li>
      );
    });

  const PopoverContactLinks = () => {
    return [
      <li className="border-b py-1" key="c-1">
        <a
          href="https://www.github.com/jomonty"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center py-3"
        >
          <GitHub color="rgb(63 63 70)" />
        </a>
      </li>,
      <li className="py-1" key="c-2">
        <a
          href="https://www.linkedin.com/in/josh-montgomery-203663111/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center py-3"
        >
          <Linkedin color="rgb(63 63 70)" />
        </a>
      </li>,
    ];
  };

  return (
    <ul>
      <PopoverNavLinks />
      <PopoverContactLinks />
    </ul>
  );
};
export default NavMobile;
