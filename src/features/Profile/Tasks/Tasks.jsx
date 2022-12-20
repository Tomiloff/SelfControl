import styles from "./Tasks.module.css";
import tasksIcon from "../../../assets/all-images/icons/tasks.svg";
import FormCreateTask from "../../../components/Profile/Forms/FormCreateTask";
import Task from "./Task/Task";


const Tasks = () => {

  return (
    <div className={styles.tasks}>
        <div className={styles.title}>
          <img src={tasksIcon} alt="listIcon" />
          <h2>Задачи</h2>
        </div>
        <FormCreateTask />
        <ul className={styles.tasksBar}>
          <Task task="Купить молоко и хлеб" />
          <Task task="Забрать заказ" />
          <Task task="Созвон по работе" />
        </ul>
      </div>
  );
};

export default Tasks;