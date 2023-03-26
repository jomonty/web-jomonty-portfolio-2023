import { useState, useEffect } from "react";

import ContentWrapper from "./ContentWrapper.jsx";
import ProjectsContent from "../constants/ProjectsContent.jsx";
// import ProjectSingle from "../components/ProjectSingle";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(
    ProjectsContent.projects[0].id
  );
  const selectedProject = ProjectsContent.projects
    .filter((project) => selectedProjectId === project.id)
    .at(0);

  const handleClick = (id) => {
    setSelectedProjectId(id);
  };
  // useEffect(() => {
  //   console.log(selectedProjectId);
  // }, [selectedProjectId]);

  const activeProjects = ProjectsContent.projects
    .filter((project) => project.active === true)
    .map((project, index) => {
      return (
        <li
          key={index}
          className="group relative flex flex-col items-start px-5 py-5"
        >
          <div className="absolute inset-x-0 inset-y-0 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:rounded-2xl"></div>
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-50">
            <a
              href={project.url ? project.url : project.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute inset-y-0 inset-x-0 z-20 sm:rounded-2xl"></span>
              <span className="relative z-10">{project.name}</span>
            </a>
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.short_description}
          </p>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-logoprimary dark:text-zinc-200">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 flex-none"
            >
              <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="ml-2">
              {project.hosted ? project.url_display : "github.com"}
            </span>
          </p>
        </li>
      );
    });

  return (
    <main>
      <ContentWrapper>
        <div className="mt-6 max-w-2xl">
          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Stuff I've made in my journey so far.
          </h1>
          {/* <p className="pt-8 text-base tracking-wider">Coming soon...</p> */}
        </div>
        <div className="mt-16 sm:mt-20">
          <ul className="grid grid-cols-1 gap-x-2 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {activeProjects}
          </ul>
        </div>
      </ContentWrapper>
    </main>
  );
};

export default Projects;
