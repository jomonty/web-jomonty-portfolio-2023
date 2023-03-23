import { Link } from "react-router-dom";
import { GitHub, Linkedin } from "react-feather";
import NavLinks from "../constants/NavLinks.js";

const NavMobile = ({ handleNavOpen }) => {
  const SideBarNavLinks = () =>
    NavLinks.map((link, index) => {
      return (
        <li key={index}>
          <Link
            to={link.link}
            className="relative m-4 block rounded-full p-2 text-center"
            onClick={() => handleNavOpen()}
          >
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <ul>
      <SideBarNavLinks />

      <li>
        <div className="relative m-4 flex justify-center rounded-full p-2 text-center">
          <a
            href="https://www.github.com/jomonty"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </li>
      <li>
        <div className="relative m-4 flex justify-center rounded-full p-2 text-center">
          <a
            href="https://www.linkedin.com/in/josh-montgomery-203663111/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </li>
    </ul>
  );
};
export default NavMobile;
