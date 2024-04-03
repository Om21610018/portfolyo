import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import emailIcon from "../assets/images/email.png";
import { useCallback } from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";

const SocialIcons = () => {
  const { data } = useContext(MyContext);
  return (
    <div className="w-full h-5 xl:h-6 flex justify-center lg:justify-start gap-1 sm:gap-3">
      <a href="#" target="_blank" rel="noreferrer" className="block h-full">
        <img src={linkedinIcon} alt="" className="h-full" />
      </a>
      <a href="#" target="_blank" rel="noreferrer" className="block h-full">
        <img src={githubIcon} alt="" className="h-full object-fill" />
      </a>
      <a href="#" className="block h-full">
        <img src={emailIcon} alt="" className="h-full" />
      </a>
    </div>
  );
};

export default SocialIcons;
