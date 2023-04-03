import ContentWrapper from "./ContentWrapper.jsx";
import { AboutContent } from "../constants/AboutContent.js";
import { ContactLinks } from "../constants/ContactLinks.jsx";
import AboutWorkHistory from "../components/about/AboutWorkHistory.jsx";
import StyledLinkList from "../components/StyledLinkList.jsx";

const About = () => {
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
            <div className="order-first lg:row-span-2">
              <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                {AboutContent.title}
              </h1>
              <AboutContentText />
            </div>
            <div className="flex justify-center lg:mt-20 lg:ml-20">
              <AboutWorkHistory />
            </div>
            <div className="lg:ml-20">
              <StyledLinkList links={ContactLinks} />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
};

export default About;
