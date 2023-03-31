import Tech from "./Tech";

const Projects = {
  title: "Stuff I've made on my journey so far.",
  text: [
    "I've made tons of little scripts and projects while I've been learning, as well as some larger projects to learn something specific. The below is a small selection of my better work,  more are available on my GitHub.",
  ],
  projects: [
    {
      id: 0,
      active: false,
      name: "",
      github: "",
      hosted: false,
      url: "",
      url_display: "",
      image: "",
      short_description: "",
      related_article_id: 0,
      tech: [].map((tech) => {
        return Tech.find((element) => element.name === tech);
      }),
    },
    {
      id: 1,
      active: true,
      name: "pickup",
      github: "https://github.com/kelsiesmurphy/pickup",
      hosted: true,
      url: "https://www.joinpickup.co",
      url_display: "joinpickup.co",
      image: "/portfolio-images/pickup_1.png",
      short_description:
        "Community based litter picking app, Java/Spring & PostgreSQL back-end, React front-end.",
      related_article_id: 1,
      tech: ["java", "spring", "javascript", "react", "html5", "css3"].map(
        (tech) => {
          return Tech.find((element) => element.name === tech);
        }
      ),
    },

    {
      id: 2,
      active: true,
      name: "beeCareful",
      github: "https://github.com/jomonty/javascript_project_beeCareful",
      hosted: false,
      url: "",
      url_display: "",
      image: "/portfolio-images/beeCareful_1.png",
      short_description:
        "Apiary management system, ExpressJS & MongoDB back-end, React front-end.",
      tech: ["javascript", "react", "express", "mongodb", "html5", "css3"].map(
        (tech) => {
          return Tech.find((element) => element.name === tech);
        }
      ),
    },

    {
      id: 3,
      active: true,
      name: "The Little Gym",
      github: "https://github.com/jomonty/python_project_gym_app",
      hosted: false,
      url: "",
      url_display: "",
      image: "/portfolio-images/the_little_gym_1.png",
      short_description:
        "Simple gym management system, built with Python/Flask.",
      tech: ["python", "flask", "postgresql", "html5", "css3"].map((tech) => {
        return Tech.find((element) => element.name === tech);
      }),
    },
  ],
};

export default Projects;
