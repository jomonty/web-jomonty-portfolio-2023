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
  return (
    <main className="">
      <div className="container relative mx-auto w-[85vw] sm:px-8 lg:px-12">
        <h1 className="min-w-sm text-3xl font-extrabold sm:text-5xl md:w-[40vw] md:min-w-md">
          Software developer, analyst, lifelong learner.
        </h1>
        <p className="min-w-sm pt-8 text-base md:w-[40vw] md:min-w-md">
          I'm Josh, a full-stack software developer based in Glasgow.
          Experienced analyst, curious thinker, committed to cool tech.
        </p>
        <ul className="flex flex-row gap-4 pt-8 pb-8">
          <HomeContactLinks />
        </ul>
      </div>
    </main>
  );
};

export default Home;
