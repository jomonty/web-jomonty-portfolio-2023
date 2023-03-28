import { useState, useEffect } from "react";

import ContentWrapper from "./ContentWrapper.jsx";
import ProjectsContent from "../constants/ProjectsContent.jsx";
// import ProjectSingle from "../components/ProjectSingle";
import ProjectSummaryGrid from "../components/projects/ProjectSummaryGrid.jsx";

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

  const ProjectsContentText = () =>
    ProjectsContent.text.map((paragraph, index) => {
      return (
        <p key={index} className="pt-8 text-base tracking-wider">
          {paragraph}
        </p>
      );
    });

  return (
    <main>
      <ContentWrapper>
        <div className="mt-6 max-w-2xl">
          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            {ProjectsContent.title}
          </h1>
          {/* <p className="pt-8 text-base tracking-wider">Coming soon...</p> */}
          <ProjectsContentText />
        </div>
        <div className="mt-10 sm:mt-12">
          <ProjectSummaryGrid projects={ProjectsContent.projects} />
        </div>
      </ContentWrapper>
    </main>
  );
};

export default Projects;
