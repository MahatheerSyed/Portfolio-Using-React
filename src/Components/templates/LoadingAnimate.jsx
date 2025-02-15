import style from "../styles/LoadingAnimate.module.css";

const LoadingAnimate = () => {
  return (
    <section className={`${style.LoadingAnimate} ${style.active}`}>
      <div className={style.bar} style={{ "--i": 6 }}></div>
      <div className={style.bar} style={{ "--i": 5 }}></div>
      <div className={style.bar} style={{ "--i": 4 }}></div>
      <div className={style.bar} style={{ "--i": 3 }}></div>
      <div className={style.bar} style={{ "--i": 2 }}></div>
      <div className={style.bar} style={{ "--i": 1 }}></div>
    </section>
  );
};

export default LoadingAnimate;
