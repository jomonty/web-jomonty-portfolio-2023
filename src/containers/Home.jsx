import ContactLinks from "../components/ContactLinks.jsx";

const Home = ({ navOpen }) => {
  const HomeContactLinks = () =>
    ContactLinks.map((link, index) => {
      return (
        <li key={`c-${index}`} className="pr-2">
          {link}
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
          <img src={source} className="h-full w-full" />
        </div>
      );
    });
  };

  return (
    <main className="">
      <div className="container relative mx-auto w-[85vw] sm:px-8 lg:px-12">
        <h1 className="min-w-sm text-3xl font-extrabold sm:text-5xl md:w-[40vw] md:min-w-md">
          Software developer, analyst, lifelong learner.
        </h1>
        <p className="min-w-sm pt-8 text-base md:w-[40vw] md:min-w-md">
          I'm Josh, a full-stack software developer based in Glasgow.
          Experienced analyst, curious by nature, committed to cool tech.
        </p>
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
