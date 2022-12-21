import styles from "./Tasks.module.css";
import tasksIcon from "../../../assets/all-images/icons/tasks.svg";
import FormCreateTask from "../../../components/Profile/Forms/FormCreateTask";
import Task from "./Task/Task";


const Tasks = ({workingArea}) => {

  return (
    <>
      {workingArea.editMode ?
      <div className={styles.tasks}> 
        <div className={styles.title}>
          <img src={workingArea.src} alt="listIcon" />
          <h2>{workingArea.name}</h2>
        </div>
        <FormCreateTask />
        <ul className={styles.tasksBar}>
          {workingArea.tasks.map(({id, text}) => {
           
            return <Task key={id} text={text} />
          })}
          {/* <Task task="Купить молоко и хлеб" />
          <Task task="Забрать заказ" />
          <Task task="Созвон по работе" /> */}
        </ul>
        </div>
        :
        <div className={styles.tasks}>
        <div className={styles.title}>
          <img src={tasksIcon} alt="listIcon" />
          <h2>Задачи</h2>
        </div>
        </div>
      }
    </>
  );
};

export default Tasks;