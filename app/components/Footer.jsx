import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-red-900 to-red-950 flex-col">
      <div className="sm:p-5 p-3">
        <p className="text-white font-unbounded capitalize font-semibold text-[8px] sm:text-sm text-center">
          All Copyright Reserved © Sayyed Saad.
        </p>
      </div>
      <div className="lg:pb-5 pb-3 flex justify-center items-center flex-row text-center text-white">
        <Link
          href="https://github.com/TrevorRoZierr"
          className="text-xl lg:text-2xl mx-2 lg:mx-4"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://twitter.com/trEvoR7223"
          className="text-xl lg:text-2xl mx-2 lg:mx-4"
          target="_blank"
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/saad-sayyed-b522b8239/"
          className="text-xl lg:text-2xl mx-2 lg:mx-4"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
