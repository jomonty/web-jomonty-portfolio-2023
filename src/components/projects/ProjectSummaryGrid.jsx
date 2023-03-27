import ProjectSummaryCard from "./ProjectSummaryCard";

const ProjectSummaryGrid = ({ projects }) => {
  const projectCards = projects
    .filter((project) => project.active === true)
    .map((project, index) => (
      <ProjectSummaryCard key={index} project={project} />
    ));
  return (
    <ul className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-3 lg:gap-y-8">
      {projectCards}
    </ul>
  );
};

export default ProjectSummaryGrid;
