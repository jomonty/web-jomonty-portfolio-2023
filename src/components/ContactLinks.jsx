import { GitHub, Linkedin } from "react-feather";

const ContactLinks = [
  {
    html: (
      <a
        href="https://www.github.com/jomonty"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center py-3"
        onClick={() => handleNavOpen()}
      >
        <GitHub color="var(--color-logoprimary)" />
      </a>
    ),
    title: "GitHub",
    link: "https://www.github.com/jomonty",
    svg: <GitHub color="var(--color-logoprimary)" />,
  },
  {
    html: (
      <a
        href="https://www.linkedin.com/in/josh-montgomery-203663111/"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center py-3"
        onClick={() => handleNavOpen()}
      >
        <Linkedin color="var(--color-logoprimary" />
      </a>
    ),
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/josh-montgomery-203663111/",
    svg: <Linkedin color="var(--color-logoprimary" />,
  },
];

export default ContactLinks;
