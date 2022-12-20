import styles from "./Lists.module.css";
import listsIcon from "../../../assets/all-images/icons/lists.svg";
import importantIcon from "../../../assets/all-images/icons/important.svg"
import workIcon from "../../../assets/all-images/icons/work.svg";
import rocketIcon from "../../../assets/all-images/icons/rocket.svg";
import bookIcon from "../../../assets/all-images/icons/book.svg";
import completedIcon from "../../../assets/all-images/icons/completed.svg";
import ButtonChapter from "../../../components/Profile/Buttons/ButtonChapter/ButtonChapter";


const Lists = () => {
  return (
    <div className={styles.lists}>
        <div className={styles.title}>
          <img src={listsIcon} alt="listIcon" />
          <h2>Списки</h2>
        </div>
        <div className={styles.chapters}>
          <ButtonChapter src={importantIcon} name="Важное"/>
          <ButtonChapter src={workIcon} name="Работа"/>
          <ButtonChapter src={rocketIcon} name="Цели"/>
          <ButtonChapter src={bookIcon} name="Книги"/>
        </div>
        <div className={styles.archive}>
        <ButtonChapter src={completedIcon} name="Выполнено"/>
        </div>
      </div>
  );
};


export default Lists;
