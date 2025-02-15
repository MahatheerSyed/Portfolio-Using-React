import style from "../styles/About.module.css";
let About = () => {
  let AboutMe = {
    name: "mahatheer",
    gender: "male",
    age: "20 years old",
    status: "unmarried",
    city: "kavali",
    nationallity: "indian",
    Experince: "fresher",
    "full time": "avaliable",
    phone: "+91 799360 4374",
    "E-Mail": "sdmahatheer123@gmail.com",
    languages: "english ,Hindhi ,telugu",
  };
  return (
    <div className={style.About}>
      <h1>
        About <span>Me</span>
      </h1>
      <p>
        I am a passionate developer with a strong foundation in programming
        languages like Python, Java, JavaScript, and SQL. I enjoy building
        interactive websites and solving real-world problems using technology.
        My skills allow me to create efficient solutions and enhance user
        experiences. I am always eager to learn and grow in the ever-evolving
        tech world.
      </p>
      <div>
        {Object.entries(AboutMe).map(([Key, value]) => {
          //   console.log("key :", Key, "Value:", value);
          return (
            <p key={Key}>
              <span>{Key}: </span>
              {value}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default About;
