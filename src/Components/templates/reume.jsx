import { useState } from "react";
import style from "../styles/resume.module.css";
import InternShip from "./InternShips";
import Education from "./Education";
import Skills from "./Skills";
import About from "./About";
let Resume = () => {
  let ResumeArray = ["Experince", "Education", "Skills", "About Me"];

  let [ResumeArrayState, setResumeArrayState] = useState("Experince");
  let HandleReumeArray = (item) => {
    setResumeArrayState(item);
    console.log(ResumeArrayState === item && style.active);
  };
  return (
    <section className={style.Resume}>
      {/* Resume options */}
      <div className={style.ResumeOptions}>
        <h1>WHY SHOULD YOU HIRE ME ?</h1>
        <p>
          Hire me because I have strong skills in Python, Java, React, SQL,
          JavaScript, HTML, and CSS. I can develop full-stack applications
          efficiently. I ensure smooth functionality, optimized performance, and
          seamless integration.
        </p>
        <div>
          {ResumeArray.map((item, index) => (
            <button
              key={index}
              className={
                item === ResumeArrayState
                  ? `${style.ResumeOptions} ${style.active}`
                  : style.ResumeOptions
              }
              onClick={() => HandleReumeArray(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* // Resume content */}
      </div>
      <div className={style.ResumeContent}>
        {ResumeArrayState == "Experince" && <InternShip></InternShip>}
        {ResumeArrayState == "Education" && <Education></Education>}
        {ResumeArrayState == "Skills" && <Skills></Skills>}
        {ResumeArrayState == "About Me" && <About></About>}
      </div>
    </section>
  );
};

export default Resume;
