import style from "../styles/InternShip.module.css";
let InternShip = () => {
  return (
    <div className={style.Experince}>
      <h1>
        My <span>Internships</span>
      </h1>
      <p>
        I have completed internships that enhanced my skills in software
        development, data analysis, and web technologies through real-world
        projects.
      </p>
      <div className={style.ExperinceCards}>
        <div className={style.ExperinceCard}>
          <p id={style.Duration}>
            <span>5 Months - 2024</span>{" "}
            <a
              href="https://drive.google.com/file/d/19K4XBqUa18JAcf-2ItM9ltWUmuLa7KQv/view?usp=drivesdk"
              target="_blank"
            >
              Verify
            </a>
          </p>
          <h1>Full Stack Web Development Using Java</h1>
          <h3>
            Wipro <img src="./src/images/wipro.png" alt="" />
          </h3>
          <p>
            Developed and maintained web applications using Java, Spring Boot,
            and Angular, ensuring seamless functionality. Collaborated with
            cross-functional teams to integrate front-end and back-end systems
            for smooth data flow. Enhanced backend performance, reducing
            response times by 30%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternShip;
