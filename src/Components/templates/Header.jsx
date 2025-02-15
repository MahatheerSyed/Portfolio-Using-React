import style from "../styles/Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import propTypes from "prop-types";
let Header = ({ HeaderComp, HomePage, HeaderState }) => {
  let HandleMenu = () => {
    let menu = document.querySelector(".Menu").style;
    if (menu.top === "0%") {
      menu.top = "-1500%";
    } else {
      menu.top = "0%";
    }
  };
  // () => HomePage(item)
  return (
    <header className={`${style.Header} ${style.active}${style.active}`}>
      <h1 onClick={() => window.location.reload()}>Mahatheer</h1>
      <FaBars id={style.menuIcon} onClick={HandleMenu} />
      <ul className="Menu">
        <FaTimes id={style.menuIcon} onClick={HandleMenu} />
        {HeaderComp.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              HomePage(item);
              HandleMenu();
            }}
            className={HeaderState === item ? style.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
};

Header.propTypes = {
  HeaderComp: propTypes.array.isRequired,
  HomePage: propTypes.func.isRequired,
  HeaderState: propTypes.string.isRequired,
};
export default Header;
