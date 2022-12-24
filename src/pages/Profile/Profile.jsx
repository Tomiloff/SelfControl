import styles from "./Profile.module.css";
import React from "react";
import Lists from "../../features/Profile/Lists/Lists";
import Tasks from "../../features/Profile/Tasks/Tasks";
import { connect } from "react-redux";
import { setListData, setArchiveData, addTask, deleteTask } from "../../stores/reducers/profile-reducer";


const Profile = ({profile, setListData, setArchiveData, addTask, deleteTask}) => {
  return (
    <div className={styles.profile}>
      <Lists lists={profile.lists} archive={profile.archive} setListData={setListData} setArchiveData={setArchiveData} />
      <Tasks workingArea={profile.workingArea} addTask={addTask} setListData={setListData} deleteTask={deleteTask}  />
    </div>
  );
};


const mapStateToProps = (state) => {
  return ({
    profile: state.profilePage
  })
};


export default connect(mapStateToProps, {setListData, setArchiveData, addTask, deleteTask})(Profile);