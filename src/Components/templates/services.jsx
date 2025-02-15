import style from "../styles/services.module.css";
import ServiceCard from "./serviceCard";
import { faCode, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
let services = () => {
  let ServicesData = [
    {
      ServiceIcon: faCode,
      title: "Web Development",
      Content: `I develop professional and optimized websites with clean, 
efficient code and modern design. My expertise ensures fast performance, responsiveness, and seamless user 
experience across all devices.`,
    },
    {
      ServiceIcon: faChartLine,
      title: "SEO",
      Content: `
I implement SEO best practices, including keyword optimization, 
fast loading speeds, and mobile responsiveness to improve search rankings.
Structured data, meta tags, and clean URLs ensure better visibility and higher engagement.`,
    },
    {
      ServiceIcon: faYoutube,
      title: "Video Editing",
      Content: `I can create a video editing tutorial where you demonstrate how to enhance videos with clear explanations. 
      Show how to cut, trim, and add effects to improve storytelling and engagement, while making complex editing techniques easy to understand for viewers.`,
    },
  ];
  return (
    <div className={style.services}>
      <h1>
        My <span>Services</span>
      </h1>
      <div className={style.CardContainer}>
        {ServicesData.map((item, index) => (
          <ServiceCard key={index} Data={item}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default services;
