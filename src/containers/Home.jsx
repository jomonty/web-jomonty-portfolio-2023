import ContactLinks from "../components/ContactLinks.jsx";
import HomeContent from "../constants/HomeContent.js";
import ContentWrapper from "./ContentWrapper.jsx";

import HomeImages from "../components/home/HomeImages.jsx";

const Home = () => {
  const HomeContactLinks = () =>
    ContactLinks.map((link, index) => {
      return (
        <li key={`c-${index}`} className="pr-2">
          {link.html}
        </li>
      );
    });

  const HomeContentText = () =>
    HomeContent.text.map((paragraph, index) => {
      return (
        <p key={index} className="pt-8 text-base tracking-wider">
          {paragraph}
        </p>
      );
    });

  return (
    <main className="">
      <ContentWrapper>
        <div className="mt-6 max-w-2xl">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {HomeContent.title}
          </h1>
          <HomeContentText />
          <ul className="flex flex-row gap-4 pt-8">
            <HomeContactLinks />
          </ul>
        </div>
      </ContentWrapper>

      <div className="mt-8 overflow-hidden sm:mt-12">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4">
          <HomeImages />
        </div>
      </div>
    </main>
  );
};

export default Home;
