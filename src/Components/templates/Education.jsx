import style from "../styles/Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faGraduationCap,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
let Education = () => {
  let EduArray = [
    {
      Date: "2019",
      Education: "SSC",
      name: "Municipal High School",
      percentage: "78 %",
      Icon: faSchool,
    },
    {
      Date: "2021",
      Education: "XII",
      name: "Sri Sai Junior College",
      percentage: "84 %",
      Icon: faBook,
    },
    {
      Date: "2025",
      Education: "B.tech (AIML)",
      name: "Visvodaya Engineering College",
      percentage: "78 %",
      Icon: faGraduationCap,
    },
  ];
  return (
    <div className={style.Education}>
      <h1>
        My <span>Eduation</span>
      </h1>
      <div className={style.EduCards}>
        {EduArray.map((item, index) => {
          return (
            <div key={index} className={style.EduCard}>
              <p>{item.Date}</p>
              <h1>
                {item.Education} <FontAwesomeIcon icon={item.Icon} />
              </h1>
              <h3>{item.name}</h3>
              <p>percentage : {item.percentage}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
