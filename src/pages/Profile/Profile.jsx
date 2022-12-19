import styles from "./Profile.module.css";
import listsIcon from "../../assets/all-images/icons/lists.svg";
import tasksIcon from "../../assets/all-images/icons/tasks.svg";
import importantIcon from "../../assets/all-images/icons/important.svg"
import workIcon from "../../assets/all-images/icons/work.svg";
import rocketIcon from "../../assets/all-images/icons/rocket.svg";
import bookIcon from "../../assets/all-images/icons/book.svg";
import completedIcon from "../../assets/all-images/icons/completed.svg";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Checkbox } from "antd";


const Profile = () => {

  const submit = (values) => {
    console.log(values);
  };

  const onChange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.lists}>
        <div className={styles.title}>
          <img src={listsIcon} alt="listIcon" />
          <h2>Списки</h2>
        </div>
        <ul className={styles.chapters}>
          <li className={styles.chapter}>
            <img src={importantIcon} alt="importantIcon" />
            <h3>Важное</h3>
          </li>
          <li className={styles.chapter}>
            <img src={workIcon} alt="workIcon" />
            <h3>Работа</h3>
          </li>
          <li className={styles.chapter}>
            <img src={rocketIcon} alt="rocketIcon" />
            <h3>Цели</h3>
          </li>
          <li className={styles.chapter}>
            <img src={bookIcon} alt="bookIcon" />
            <h3>Книги</h3>
          </li>
        </ul>
        <div className={styles.archive}>
          <div className={styles.chapter}>
            <img src={completedIcon} alt="completedIcon" />
            <h3>Выполнено</h3>
          </div>
        </div>
      </div>
      <div className={styles.tasks}>
        <div className={styles.title}>
          <img src={tasksIcon} alt="listIcon" />
          <h2>Задачи</h2>
        </div>
        <Formik initialValues={{task: ""}} onSubmit={submit}>
          <Form>
            <Field name="task" placeholder="+ Добавьте задачу, нажмите Enter для сохранения" type="text" className={styles.taskForm} />
          </Form>
        </Formik>
        <ul className={styles.tasksBar}>
          <li className={styles.task}>
          <Checkbox onChange={onChange} />
            <p>Купить молоко и хлеб</p>
          </li>
          <li className={styles.task}>
          <Checkbox onChange={onChange} />
            <p>Забрать заказ</p>
          </li>
          <li className={styles.task}>
          <Checkbox onChange={onChange} />
            <p>Созвон по работе</p>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Profile;