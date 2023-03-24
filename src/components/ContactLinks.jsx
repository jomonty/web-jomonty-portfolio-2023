import { GitHub, Linkedin } from "react-feather";

const ContactLinks = [
  <a
    href="https://www.github.com/jomonty"
    target="_blank"
    rel="noreferrer"
    className="flex justify-center py-3"
    onClick={() => handleNavOpen()}
  >
    <GitHub color="var(--color-logoprimary)" />
  </a>,
  <a
    href="https://www.linkedin.com/in/josh-montgomery-203663111/"
    target="_blank"
    rel="noreferrer"
    className="flex justify-center py-3"
    onClick={() => handleNavOpen()}
  >
    <Linkedin color="var(--color-logoprimary" />
  </a>,
];

export default ContactLinks;
