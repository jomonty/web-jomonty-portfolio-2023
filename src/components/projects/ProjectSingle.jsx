import TechIconList from "./TechIconList";

const ProjectSingle = ({ project }) => {
  const paragraphNodes = project.description.map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>;
  });

  return (
    <div>
      <h3>
        {project.name}
        <span> - </span>
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span>{project.url ? " - " : ""}</span>
        <a
          href={project.url ? project.url : ""}
          target="_blank"
          rel="noreferrer"
        >
          {project.url ? project.url_display : ""}
        </a>
      </h3>
      <TechIconList tech={project.tech} />
      <div align="center" className="project-screenshot">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          width="100%"
        />
      </div>
      {paragraphNodes}
    </div>
  );
};
