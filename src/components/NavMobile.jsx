import { Link } from "react-router-dom";
import { GitHub, Linkedin } from "react-feather";
import NavLinks from "../constants/NavLinks.js";

const NavMobile = ({ handleNavOpen }) => {
  const SideBarNavLinks = () =>
    NavLinks.map((link, index) => {
      return (
        <li key={index} className="border-b">
          <Link
            to={link.link}
            className="relative block rounded-full py-4 text-center text-zinc-700"
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

      <li className="border-b">
        <div className="relative flex justify-center rounded-full py-4 text-center">
          <a
            href="https://www.github.com/jomonty"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub color="rgb(63 63 70)" />
          </a>
        </div>
      </li>
      <li>
        <div className="relative flex justify-center rounded-full py-4 text-center">
          <a
            href="https://www.linkedin.com/in/josh-montgomery-203663111/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="rgb(63 63 70)" />
          </a>
        </div>
      </li>
    </ul>
  );
};
export default NavMobile;
