import styles from "./Profile.module.css";
import React from "react";
import Lists from "../../features/Profile/Lists/Lists";
import Tasks from "../../features/Profile/Tasks/Tasks";


const Profile = () => {
  return (
    <div className={styles.profile}>
      <Lists />
      <Tasks />
    </div>
  );
};


export default Profile;