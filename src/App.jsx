import Header from "./Components/templates/Header";
import Hero from "./Components/templates/Hero";
import Resume from "./Components/templates/reume";
import Services from "./Components/templates/services";
import Contact from "./Components/templates/Contact";
import Project from "./Components/templates/Projects";
import LoadingAnimate from "./Components/templates/LoadingAnimate";
import { useState } from "react";
function App() {
  let HeaderComp = ["home", "services", "resume", "portfolio", "contact"];
  let [HeaderState, setHeader] = useState("home");
  let HomePage = (item) => {
    setHeader(item);
  };
  return (
    <>
      <Header
        HeaderComp={HeaderComp}
        HomePage={HomePage}
        HeaderState={HeaderState}
      ></Header>
      <LoadingAnimate></LoadingAnimate>
      {HeaderState === "home" && (
        <>
          <Hero />
        </>
      )}
      {HeaderState === "services" && (
        <>
          <Services></Services>
        </>
      )}
      {HeaderState === "resume" && (
        <>
          <Resume></Resume>
        </>
      )}
      {HeaderState === "contact" && <Contact></Contact>}
      {HeaderState === "portfolio" && <Project />}
    </>
  );
}

export default App;
