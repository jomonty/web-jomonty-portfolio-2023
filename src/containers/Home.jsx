const Home = ({ navOpen }) => {
  return (
    <main
      className={`mx-auto flex w-full justify-center ${
        navOpen ? "relative -z-10 blur" : "z-0"
      }`}
    >
      <p className="flex justify-center p-10">
        Hi! My name is Josh, and I'm a Glasgow based software developer. After
        working in Utilities for several years, I came to the realization that I
        enjoyed using the tools I was using to do my job more than my regular
        work and this built an ambition to transfer into software development. I
        began to teach myself through self-guided study, online courses, and
        building some personal projects. The more time I spent studying the more
        I became convinced that this was the career for me. In late 2022 I made
        the decision to enrol at CodeClan Glasgow, for a 4-month intensive
        course in professional software development. It's been an incredible
        experince, it's built my knowledge, confidence and I've massively
        enjoyed it. I'm now actively looking for employment, if you'd like to
        get in touch please drop me a message on LinkedIn or send an email, I'm
        always available for a chat.
      </p>
    </main>
  );
};

export default Home;
