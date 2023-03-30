import ContentWrapper from "./ContentWrapper.jsx";
import AboutContent from "../constants/AboutContent.js";
import ContactLinks from "../components/ContactLinks.jsx";
import AboutWorkHistory from "../components/about/AboutWorkHistory.jsx";

const About = () => {
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
        <p key={index} className="pt-8 text-base tracking-wider">
          {paragraph}
        </p>
      );
    });
  return (
    <main>
      <ContentWrapper>
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="flex justify-center lg:mt-20 lg:ml-20">
              <AboutWorkHistory />
            </div>
            <div className="order-first lg:row-span-2">
              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                {AboutContent.title}
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
      </ContentWrapper>
    </main>
  );
};

export default About;
