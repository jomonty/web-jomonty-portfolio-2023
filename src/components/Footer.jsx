import { Link } from "react-router-dom";
import NavLinks from "../constants/NavLinks.js";

const Footer = () => {
  const FooterNavLinks = () =>
    NavLinks.map((link, index) => {
      return (
        <li key={index}>
          <Link
            to={link.link}
            className="relative block p-1 px-5 text-sm hover:text-emerald-700"
          >
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <footer className="bottom-0 flex flex-initial flex-col place-items-center border-t border-zinc-100 py-6 dark:border-zinc-700/40">
      <ul className="flex justify-around py-3 md:w-[25vw] ">
        <FooterNavLinks />
      </ul>
      <h4 className="py-3">&copy; Josh Montgomery 2023</h4>
    </footer>
  );
};

export default Footer;
