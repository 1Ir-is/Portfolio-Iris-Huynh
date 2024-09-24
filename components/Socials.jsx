import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com" },
  { icon: <FaLinkedin />, link: "https://linkedin.com" },
  { icon: <FaFacebook />, link: "https://facebook.com" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.link} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
