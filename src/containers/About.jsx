import AboutContent from "../constants/AboutContent.js";
import ContactLinks from "../components/ContactLinks.jsx";

const About = ({ navOpen, handleNavOpen }) => {
  const AboutContactLinks = () =>
    ContactLinks.map((link, index) => {
      return (
        <li
          key={`c-${index}`}
          className="flex items-center justify-center gap-4 align-middle"
        >
          <a
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="flex justify-start py-3 hover:text-logoprimary"
            onClick={() => {
              handleNavOpen();
            }}
          >
            <span className="flex  gap-8">
              {link.svg}
              <p className="text-base hover:text-logoprimary">{link.title}</p>
            </span>
          </a>
        </li>
      );
    });
  const AboutContentText = () =>
    AboutContent.text.map((paragraph, index) => {
      return (
        <p key={index} className="pt-8 text-base">
          {paragraph}
        </p>
      );
    });
  return (
    <main className="">
      <div className="mt-6 sm:px-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:ml-20">
                  <div className="flex max-w-xs px-2.5 lg:max-w-none">
                    <img
                      src="/logo-low-trans-svg.svg"
                      className="aspect-square rounded-xl object-cover md:rounded-2xl"
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                    I'm Josh Montgomery, full-stack software developer in
                    Glasgow.
                  </h1>
                  <AboutContentText />
                </div>
                <div className="lg:ml-20">
                  <ul className="flex flex-col gap-6 border-y border-zinc-100 py-4 dark:border-zinc-100/5">
                    <AboutContactLinks />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
