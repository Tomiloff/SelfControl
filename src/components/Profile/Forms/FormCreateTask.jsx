import styles from "./FormCreateTask.module.css";
import { Field, Form, Formik } from "formik";


const FormCreateTask = ({id, addTask, setListData}) => {

  const getTask = (values, {resetForm, setSubmitting }) => {
    (!values.task) ?  setSubmitting(false) :
    addTask(id, values.task);
    setListData(id, "lists", true);
    resetForm();
  };

  return (
    <Formik initialValues={{task: ""}} onSubmit={getTask}>
      <Form>
        <Field name="task" placeholder=" + Добавьте задачу, нажмите Enter" type="text" className={styles.taskForm} />
      </Form>
    </Formik>
  );
};


export default FormCreateTask;