import { BookOpen, GitHub, Link } from "react-feather";

import StyledLink from "../StyledlLink.jsx";

const ProjectSummaryCard = ({ project }) => {
  const ProjectStyledLink = ({ link, displayText, children }) => {
    return (
      <p className="z-10 mt-3 flex text-sm tracking-wide ">
        <div className="text-logoprimary hover:font-bold hover:text-logoprimary sm:text-logosecondary">
          <StyledLink url={link} displayText={displayText}>
            {children}
          </StyledLink>
        </div>
      </p>
    );
  };

  return (
    <div
      className="group relative flex flex-col px-5 py-5"
      onClick={() => console.log(project.id)}
    >
      <div className="absolute inset-0 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:rounded-2xl"></div>
      <h2 className="z-10 font-extrabold tracking-wider">{project.name}</h2>
      <p className="z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.short_description}
      </p>
      {/* <StyledLink link="" displayText="Blog">
        <BookOpen size={20} />
      </StyledLink> */}
      <ProjectStyledLink link={project.github} displayText="GitHub">
        <GitHub size={20} />
      </ProjectStyledLink>
      {project.hosted ? (
        <ProjectStyledLink link={project.url} displayText={project.url_display}>
          <Link size={20} />
        </ProjectStyledLink>
      ) : null}
    </div>
  );
};

export default ProjectSummaryCard;
