import styles from "./Lists.module.css";
import listsIcon from "../../../assets/all-images/icons/lists.svg";
import ButtonChapter from "../../../components/Profile/Buttons/ButtonChapter/ButtonChapter";


const Lists = ({lists, archive, setListData, setArchiveData}) => {
  return (
    <div className={styles.lists}>
        <div className={styles.title}>
          <img src={listsIcon} alt="listIcon" />
          <h2>Списки</h2>
        </div>
        <div id="lists" className={styles.chapters}>
          {lists.map(({id, name, src}) => {
            return (
              <ButtonChapter key={id} id={id} name={name} src={src} setListData={setListData} />
            )
          })}
        </div>
        <div id="archive" className={styles.archive}>
          {archive.map(({id, name, src}) => {
            return (
              <ButtonChapter key={id} id={id} src={src} name={name} setArchiveData={setArchiveData}/>
            )
          })}
        </div>
      </div>
  );
};


export default Lists;
