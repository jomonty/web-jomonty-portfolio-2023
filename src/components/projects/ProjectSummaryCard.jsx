import { Link } from "react-router-dom";
import { BookOpen, GitHub, Link as FeatherLink } from "react-feather";

import StyledLink from "../StyledlLink.jsx";

const ProjectSummaryCard = ({ project }) => {
  const ProjectStyledLink = ({ link, displayText, internal = false }) => {
    return (
      <div className="z-10 mt-3 flex text-sm tracking-wide ">
        <div className="text-logoprimary hover:font-bold hover:text-logoprimary sm:text-logosecondary">
          <StyledLink
            url={link}
            displayText={displayText}
            showText={true}
            internal={internal}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className="group relative flex flex-col px-5 py-5"
      onClick={() => console.log(project.id)}
    >
      <div className="absolute inset-0 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:rounded-2xl"></div>
      <h2 className="z-10 font-extrabold tracking-wider">{project.name}</h2>
      {/* <h4 className="z-10 mt-2 text-sm font-semibold tracking-wider "> */}
      <div className="z-10 mt-2 flex">
        <Link
          to={`/articles/${project.related_article_id}`}
          className="font-semibold tracking-wider text-logoprimary hover:text-logoprimary sm:text-logosecondary"
        >
          Blog
        </Link>
      </div>
      {/* </h4> */}
      <p className="z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.short_description}
      </p>

      <ProjectStyledLink link={project.github} displayText="GitHub" />
      {project.hosted ? (
        <ProjectStyledLink
          link={project.url}
          displayText={project.url_display}
        />
      ) : null}
    </div>
  );
};

export default ProjectSummaryCard;
