import styles from "./Tasks.module.css";
import tasksIcon from "../../../assets/all-images/icons/tasks.svg";
import FormCreateTask from "../../../components/Profile/Forms/FormCreateTask";
import Task from "./Task/Task";
import indicatorIcon from "../../../assets/all-images/icons/indicator.svg"


const Tasks = ({workingArea, addTask, setListData}) => {

  return (
    <>
      {workingArea.editMode ?
      (<div className={styles.tasks}> 
        <div className={styles.title}>
          <img src={workingArea.src} alt="listIcon" />
          <h2>{workingArea.name}</h2>
        </div>
        <FormCreateTask addTask={addTask} id={workingArea.id} setListData={setListData} />
        <ul className={styles.tasksBar}>
          {workingArea.tasks.map(({id, text}) => {
           
            return <Task key={id} text={text} />
          })}
        </ul>
        </div>) :
        (<div className={styles.tasks}>
          <div className={styles.title}>
            <img src={tasksIcon} alt="listIcon" />
            <h2>Задачи</h2>
          </div>
          <div className={styles.hintIndicatorIcon}>
            <img src={indicatorIcon} alt="indicatorIcon" className={styles.indicatorIcon} />
            <p className={styles.hint}>Выберите раздел из списка, <br/>чтобы посмотреть его детали</p>
          </div>
        </div>)
      }
    </>
  );
};

export default Tasks;