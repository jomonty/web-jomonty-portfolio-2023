const Home = ({ navOpen }) => {
  return (
    <main
      className={`mx-auto flex w-full justify-center ${
        navOpen ? "relative -z-10 blur" : "z-0"
      }`}
    >
      <p className="flex justify-center p-10">Home</p>
    </main>
  );
};

export default Home;
