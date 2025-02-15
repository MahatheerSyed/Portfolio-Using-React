import { useState, useEffect } from "react";
import style from "../styles/Projects.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

let Project = () => {
  let [projectIndex, setProjectIndex] = useState(0);

  let ProjectArray = [
    {
      img: "./src/images/voiceGlobe.png",
      pNo: "01",
      title: "VoiceGlobe",
      desc: `Developed a Speech-to-Text and Translation Web Application that transcribes user
 speech into text, detects the language, and translates it into the selected language using
 Flask and APIs`,
      tech: "Python, Flask, HTML, CSS, JavaScript",
      linkedin: "www.linkedin.com/in/mahatheer-syed-ba37992b1",
      github: "https://github.com/MahatheerSyed/VoiceGlobe",
    },
    {
      img: "./src/images/codeChamp.png",
      pNo: "02",
      title: "Code Champ",
      desc: `Designed and implemented a web-based code compiler supporting multiple pro
gramming languages, enabling real-time code execution with an intuitive, responsive
 user interface. Optimized backend processes for enhanced user experience.`,
      tech: "Python, Flask, HTML, CSS, JavaScript",
      linkedin: "www.linkedin.com/in/mahatheer-syed-ba37992b1",
      github: "https://github.com/MahatheerSyed/codechamp",
    },
    {
      img: "./src/images/ReactCalcy.png",
      pNo: "03",
      title: "React Calculator",
      desc: ` A React-based calculator application that allows users to perform basic arithmetic
       operations like addition, subtraction, multiplication, and division. It includes a user interface
       with buttons for numbers and operations, and displays the result dynamically as users interact with the calculator.`,
      linkedin: "www.linkedin.com/in/mahatheer-syed-ba37992b1",
      tech: "React, Html, CSS",
      github: "https://github.com/MahatheerSyed/Calculator-Using-REACT",
    },
  ];

  const leftSlide = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1);
    }
  };

  const rightSlide = () => {
    if (projectIndex < ProjectArray.length - 1) {
      setProjectIndex(projectIndex + 1);
    }
  };

  return (
    <div className={style.Projects}>
      <h1>
        Latest <span>Projects</span>
      </h1>
      <div className={style.ProjectsContainer}>
        <div className={style.ProjectContent}>
          <h1>{ProjectArray[projectIndex].pNo}</h1>
          <h2>{ProjectArray[projectIndex].title}</h2>
          <p>{ProjectArray[projectIndex].desc}</p>
          <p className={style.tech}>{ProjectArray[projectIndex].tech}</p>
          <hr />
          <div>
            <a href={ProjectArray[projectIndex].linkedin} target="_blank">
              <FaLinkedin />
            </a>
            <a href={ProjectArray[projectIndex].github} target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        {/* slider */}
        <div className={style.ProjectImages}>
          <div className={style.ProjectSlider}>
            <img src={ProjectArray[projectIndex].img} alt="Project" />
          </div>
          <div className={style.Navigation}>
            <p onClick={leftSlide}>
              <FontAwesomeIcon icon={faChevronLeft} className={style.navIcon} />
            </p>
            <p onClick={rightSlide}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={style.navIcon}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
