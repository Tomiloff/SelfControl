import styles from "./ButtonChapter.module.css";


const ButtonChapter = ({src, name}) => {
  return (
    <button className={styles.chapter}>
      <img src={src} alt="buttonChapter" />
      <h3>{name}</h3>
    </button>
  );
};

export default ButtonChapter;