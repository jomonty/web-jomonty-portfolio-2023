import { Link } from "react-router-dom";

import { X, Menu, GitHub, Linkedin } from "react-feather";

const Header = ({ navOpen, handleNavOpen }) => {
  // const [navOpen, setNavOpen] = useState();

  // const handleNavOpen = () => {
  //   setNavOpen(!navOpen);
  // };

  return (
    <header className="flex flex-col">
      <div className="container sticky top-0 mx-auto flex flex-row items-center justify-around py-8 pb-0 font-Lato">
        <div
          className={`flex w-1/3 items-center justify-center md:w-1/4 ${
            navOpen ? "blur" : ""
          }`}
        >
          <img src="./logo-low-trans-svg.svg" className="w-1/3"></img>
        </div>

        <div className="hidden w-2/4 items-center justify-center md:flex">
          <ul className="flex items-center rounded-full border border-slate-200 p-1 px-3 text-slate-700 shadow-md">
            <li>
              <Link
                to="/"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/tech"
                className="relative block p-1 px-3 hover:text-emerald-600"
              >
                Tech
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="relative z-20 rounded-full p-3 md:hidden"
          onClick={() => handleNavOpen()}
        >
          <div>
            {navOpen ? <X color="white" /> : <Menu color="rgb(21 128 61)" />}
          </div>
        </button>

        <div
          className={`fixed top-0 right-0 z-10 flex h-full w-[40vw] flex-row justify-center bg-green-700 py-32 px-5 text-white duration-300 ease-in-out ${
            !navOpen ? " translate-x-full" : " translate-x-0"
          }`}
        >
          <ul>
            <li>
              <Link
                to="/"
                className="relative m-4 block rounded-full p-2 text-center"
                onClick={() => handleNavOpen()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative m-4 block rounded-full p-2 text-center"
                onClick={() => handleNavOpen()}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="relative m-4 block rounded-full p-2 text-center"
                onClick={() => handleNavOpen()}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/tech"
                className="relative m-4 block rounded-full p-2 text-center"
                onClick={() => handleNavOpen()}
              >
                Tech
              </Link>
            </li>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
