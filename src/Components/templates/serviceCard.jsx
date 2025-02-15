import style from "../styles/serviceCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
let ServiceCard = ({ Data }) => {
  console.log("ServicesData", Data.ServiceIcon);

  return (
    <div className={style.ServiceCard}>
      <div className={style.ServiceCardIcon}>
        <h2>
          <FontAwesomeIcon icon={Data.ServiceIcon} />
        </h2>
        <h3>
          <FontAwesomeIcon icon={faArrowRight} className={style.icon} />
        </h3>
      </div>
      <h1>{Data.title}</h1>
      <p>{Data.Content}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  Data: PropTypes.shape({
    ServiceIcon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    Content: PropTypes.string.isRequired,
  }).isRequired,
};
export default ServiceCard;
