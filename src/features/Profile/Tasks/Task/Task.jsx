import { Checkbox } from "antd";
import styles from "./Task.module.css";


const Task = ({task}) => {

  const onChange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <li className={styles.task}>
      <Checkbox onChange={onChange} />
      <p>{task}</p>
    </li>
  );
};


export default Task;