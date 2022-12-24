import { Checkbox } from "antd";
import styles from "./Task.module.css";


const Task = ({text, id, listId, deleteTask, setListData, titleSection}) => {

  const onChange = (e) => {
    const taskId = e.target.id;
    const listId = e.target.listId;
    
    setTimeout(() => {
      deleteTask(taskId, listId);
      setListData(listId, titleSection, true);
    }, 400);
  };

  return (
    <li id={id} className={styles.task}>
      <Checkbox listId={listId} id={id} onChange={onChange} />
      <p>{text}</p>
    </li>
  );
};


export default Task;