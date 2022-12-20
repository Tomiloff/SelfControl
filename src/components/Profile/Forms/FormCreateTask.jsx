import styles from "./FormCreateTask.module.css";
import { Field, Form, Formik } from "formik";


const FormCreateTask = () => {

  const submit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={{task: ""}} onSubmit={submit}>
      <Form>
        <Field name="task" placeholder="+ Добавьте задачу, нажмите Enter для сохранения" type="text" className={styles.taskForm} />
      </Form>
    </Formik>
  );
};


export default FormCreateTask;