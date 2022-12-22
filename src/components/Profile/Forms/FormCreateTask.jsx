import styles from "./FormCreateTask.module.css";
import { Field, Form, Formik } from "formik";
import { useState } from "react";


const FormCreateTask = ({id, addTask, setListData}) => {

  const getTask = (values, {resetForm}) => {
    addTask(id, values.task);
    setListData(id, true);
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