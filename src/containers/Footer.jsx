import { Link } from "react-router-dom";
import NavLinks from "../constants/NavLinks.js";
import ContentWrapper from "./ContentWrapper.jsx";

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
    <footer className="mt-24">
      <ContentWrapper>
        <div className="border-t border-zinc-100 pt-8 pb-12 dark:border-zinc-700/60">
          <div className="relative flex flex-col place-items-center">
            <ul className="flex justify-around py-3 md:w-[25vw] ">
              <FooterNavLinks />
            </ul>
            <h4 className="pt-6 pb-3">&copy; Josh Montgomery 2023</h4>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
