import Tech from "./Tech";

const Projects = {
  title: "Stuff I've made on my journey so far.",
  text: ["", ""],
  projects: [
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
      description: [
        "For my final project at Codeclan, I worked with 2 other students to produce pickup, a community space for litter picking events with user authentication, event creation and a comment system, and continuously updating statistics on communities, events and users. This was a full stack app made using Java, Spring Boot, PostgreSQL on the backend with Javascript, React and Tailwind on the frontend.",
        "Our primary goal was to build a fully functional app, and have both the front and the backend hosted. We achieved this with vercel for the frontend, and neon postgres with a Digital Ocean droplet hosting a java application for the backend.",
        "This project was incredible to work on, from conception through planning and development, it was filled with challenges and I enjoyed it immensely. Early in our planning process I built out an API specifcation using swagger to enable the front and backend to be developed concurrently.",
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://app.swaggerhub.com/apis/jomonty_cs_swagger/pickup_v2/1.0.0"
          >
            pickup API docs - SwaggerHub
          </a>
        </span>,
        "I planned and developed the entirety of the server, learning loads about Java and Spring Boot along the way. Hosting was it's own challenge, but I'm super proud to have managed to get it online and have a working demo.",
        "Full details of the project and my team are available on the GitHub repo's README.",
      ],
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
      description: [
        "This was a group project at Codeclan. Our brief was to build a full-stack application using React, Express and MongoDB, and get experience using git in a team. One of our team members is a beekeeper so we decided to build an app to manage apiaries (groups of colonies), colonies and inspections.",
        "Our MVP included a React front-end, an Express/MongoDB backend and CRUD functionality for colonies and inspections, we had extensions covering dynamic display of information on colonies depending on properties of the latest inspection, inclusion of an API call to OpenWeather to show upcoming weather for the colonies, and the capability to have multiple apiaries.",
        "We discovered some challenges early on in the project - we essentially wanted a relational structure in the data model which needed some thought for MongoDB, this was my job. I designed a relational data model for the database, and I designed and built the server using Express, managing to keep the complexity of the logic needed to manage the relational structure (mostly!) abstracted to the server code.",
        "I also implemented a skeleton structure for the client, client-side logic to handle CRUD operations and managed our git workflow as well as problem solving and bug fixing through the full client. Working through this project in a team was a great experience and it really hammered home the importance of a good git workflow.",
        "Full details of the project and my team are available on the GitHub repo's README.",
      ],
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
      description: [
        "A full stack app build with Python, Flask, PostgreSQL, HTML & CSS with CRUD functionality to allow a gym to manage memberships, classes, and the registration of members to classes.",
        "This was my first end to end full stack app and I really enjoyed designing and building it. We have a few restrictions to keep us to the Python/Flask stack such as no JS, no ORM, no prebuilt CSS libraries.",
        "I designed the database in PostgreSQL, database handling and interaction in Python with the psycopg2 library, route handling with Flask, templates with Jinja, styling with CSS and unit tests with Pythons unittest module. The logic in the controller/router was by far the most challenging though most enjoyable part of the project.",
        "Full details of the brief are available in the GitHub repo's README.",
      ],
      tech: ["python", "flask", "postgresql", "html5", "css3"].map((tech) => {
        return Tech.find((element) => element.name === tech);
      }),
    },
  ],
};

export default Projects;
