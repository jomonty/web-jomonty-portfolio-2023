import ContactLinks from "../components/ContactLinks.jsx";
import HomeContent from "../constants/HomeContent.js";

const Home = ({ navOpen }) => {
  const HomeContactLinks = () =>
    ContactLinks.map((link, index) => {
      return (
        <li key={`c-${index}`} className="pr-2">
          {link.html}
        </li>
      );
    });

  const HomeImages = () => {
    const imageSources = [
      "/sample-home-image-1.jpg",
      "/sample-home-image-2.jpg",
      "/sample-home-image-3.jpg",
      "/sample-home-image-4.jpg",
      "/sample-home-image-5.jpg",
    ];

    return imageSources.map((source, index) => {
      return (
        <div
          key={index}
          className="relative aspect-square w-44 flex-none overflow-hidden rounded-xl object-cover sm:w-72 sm:rounded-2xl"
        >
          <img
            src={source}
            className={`h-full w-full ${
              index % 2 === 0 ? "rotate-1" : "-rotate-1"
            }`}
          />
        </div>
      );
    });
  };

  const HomeContentText = () =>
    HomeContent.text.map((paragraph, index) => {
      return (
        <p
          key={index}
          className="min-w-sm pt-8 text-base md:w-[40vw] md:min-w-md"
        >
          {paragraph}
        </p>
      );
    });

  return (
    <main className="">
      <div className="container relative mx-auto w-[85vw] sm:px-8 lg:px-12">
        <h1 className="min-w-sm text-3xl font-extrabold sm:text-5xl md:min-w-md lg:w-[40vw]">
          {HomeContent.title}
        </h1>
        <HomeContentText />
        <ul className="flex flex-row gap-4 pt-8">
          <HomeContactLinks />
        </ul>
      </div>
      <div className="mt-8 overflow-hidden sm:mt-12">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4">
          <HomeImages />
        </div>
      </div>
    </main>
  );
};

export default Home;
