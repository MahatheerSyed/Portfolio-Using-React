import style from "../styles/Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJava,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

let Skills = () => {
  let IconArray = [
    faPython,
    faJava,
    faReact,
    faHtml5,
    faCss3Alt,
    faJs,
    faDatabase,
  ];
  return (
    <div className={style.Skills}>
      <h1>
        My <span>Skills</span>
      </h1>
      <p>
        I have learned several programming languages including Python, Java,
        JavaScript, HTML, CSS, and SQL. With these skills, I can build
        interactive and dynamic websites, develop web applications, and solve
        real-world problems by leveraging technology. My knowledge enables me to
        create efficient solutions for various challenges in software
        development and problem-solving.
      </p>
      <div className={style.SkillsCards}>
        {IconArray.map((item, index) => {
          return (
            <div className={style.SkillsCard} key={index}>
              <FontAwesomeIcon icon={item} className={style.Icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
