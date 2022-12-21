import { Checkbox } from "antd";
import styles from "./Task.module.css";


const Task = ({text}) => {

  const onChange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <li className={styles.task}>
      <Checkbox onChange={onChange} />
      <p>{text}</p>
    </li>
  );
};


export default Task;