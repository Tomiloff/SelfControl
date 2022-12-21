import styles from "./ButtonChapter.module.css";


const ButtonChapter = ({id, src, name, setListData}) => {
  
  const getListData = (e) => {
    console.log(e.currentTarget.id)
    let idElem = e.currentTarget.id;
    setListData(idElem, true);
  };

  return (
    <button id={id} className={styles.chapter} onClick={getListData}>
      <img src={src} alt="buttonChapter" />
      <h3>{name}</h3>
    </button>
  );
};

export default ButtonChapter;