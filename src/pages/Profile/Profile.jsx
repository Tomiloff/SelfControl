import styles from "./Profile.module.css";
import React from "react";
import Lists from "../../features/Profile/Lists/Lists";
import Tasks from "../../features/Profile/Tasks/Tasks";
import { connect } from "react-redux";


const Profile = ({profile}) => {
  return (
    <div className={styles.profile}>
      <Lists lists={profile.lists} archive={profile.archive} />
      <Tasks />
    </div>
  );
};


const mapStateToProps = (state) => {
  return ({
    profile: state.profilePage
  })
};


export default connect(mapStateToProps, null)(Profile);