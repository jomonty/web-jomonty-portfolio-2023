import { GitHub, Linkedin, Link, BookOpen } from "react-feather";

const StyledLink = ({ url, displayText, showText }) => {
  const chooseLink = (text) => {
    switch (text.toLowerCase()) {
      case "github":
        return <GitHub color="var(--color-logoprimary" />;
      case "linkedin":
        return <Linkedin color="var(--color-logoprimary" />;
      default:
        return <Link color="var(--color-logoprimary" />;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mt-2 flex gap-x-4 rounded-xl p-2 tracking-wide transition hover:bg-zinc-100 hover:text-logoprimary hover:dark:bg-zinc-800/50"
    >
      <span>{chooseLink(displayText)}</span>
      <span>{showText ? displayText : ""}</span>
    </a>
  );
};

export default StyledLink;
