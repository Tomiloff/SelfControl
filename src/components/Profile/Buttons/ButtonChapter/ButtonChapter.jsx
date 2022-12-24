import styles from "./ButtonChapter.module.css";


const ButtonChapter = ({id, src, name, setListData, setArchiveData}) => {

  const getListData = (e) => {
    const nameSection = e.currentTarget.closest("div").id;
    const elemId = e.currentTarget.id;

    if (nameSection === "lists") {
      setListData(elemId, nameSection, true);
    } 
    else if (nameSection === "archive") {
      setArchiveData(elemId, nameSection, true);
    }
  };

  return (
    <button id={id} className={styles.chapter} onClick={getListData}>
      <img src={src} alt="buttonChapter" />
      <h3>{name}</h3>
    </button>
  );
};

export default ButtonChapter;