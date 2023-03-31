import StyledLink from "./StyledlLink";

const StyledLinkList = ({ links, showText = true }) => {
  const StyledLinks = () =>
    links.map((link, index) => {
      return (
        <li
          key={index}
          className="flex items-center justify-center gap-4 align-middle"
        >
          <StyledLink
            url={link.url}
            displayText={link.url_display}
            showText={showText}
          />
        </li>
      );
    });

  return (
    <ul className="flex flex-col gap-6 border-y border-zinc-100 py-4 dark:border-zinc-100/5">
      <StyledLinks />
    </ul>
  );
};

export default StyledLinkList;
