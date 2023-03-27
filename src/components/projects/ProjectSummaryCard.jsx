import { BookOpen, GitHub, Link } from "react-feather";

const ProjectSummaryCard = ({ project }) => {
  const StyledLink = ({ link, displayText, children }) => {
    return (
      <p className="z-10 mt-3 flex text-sm tracking-wide ">
        <div className="text-logoprimary lg:text-zinc-600 dark:lg:text-zinc-200">
          <div className="group-hover:text-logosecondary">
            <div className="hover:font-bold hover:text-logoprimary">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex gap-x-4 rounded-xl px-3 py-2 transition hover:bg-zinc-100  hover:dark:bg-zinc-800 "
              >
                <span>{children}</span>
                <span>{displayText}</span>
              </a>
            </div>
          </div>
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
      <StyledLink link={project.github} displayText="GitHub">
        <GitHub size={20} />
      </StyledLink>
      {project.hosted ? (
        <StyledLink link={project.url} displayText={project.url_display}>
          <Link size={20} />
        </StyledLink>
      ) : null}
    </div>
  );
};

export default ProjectSummaryCard;
