import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import style from "../styles/Hero.module.css";
import { Typewriter } from "react-simple-typewriter";
let Hero = () => {
  let onButtonClick = () => {
    window.location.href =
      "https://drive.google.com/file/d/1bYYbM8jA220WHiFCcow7qc6y3Y2sUq8-/view?usp=sharing";
  };
  return (
    <div className={style.Hero}>
      <div className={style.Content}>
        <h1>Mahatheer Syed</h1>
        <h2>
          i&apos;m{" "}
          <span>
            <Typewriter
              words={[
                "a FullStack Developer",
                "a Python Developer",
                "a Java Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p>
          Aspiring Java Full Stack Developer with expertise in Java, Spring
          Boot, Angular, React, REST APIs, and SQL. Passionate about building
          scalable web applications, optimizing backend performance, and
          contributing to inno vative projects. Seeking opportunities to apply
          my technical skills in a dynamic environment
        </p>
        <div className={style.buttonCon}>
          <button onClick={onButtonClick}>Download Cv</button>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className={style.imgDiv}>
        <img src="./src/images/mahatheer.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
