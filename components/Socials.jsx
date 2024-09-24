import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/1Ir-is" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/minh-huy-hu%E1%BB%B3nh-82ba86327/",
  },
  { icon: <FaFacebook />, link: "https://www.facebook.com/minhhuy.huynh.5076" },
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
