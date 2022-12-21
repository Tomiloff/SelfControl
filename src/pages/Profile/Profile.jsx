import styles from "./Profile.module.css";
import React from "react";
import Lists from "../../features/Profile/Lists/Lists";
import Tasks from "../../features/Profile/Tasks/Tasks";
import { connect } from "react-redux";
import { setListData } from "../../stores/reducers/profile-reducer";


const Profile = ({profile, setListData}) => {
  return (
    <div className={styles.profile}>
      <Lists lists={profile.lists} archive={profile.archive} setListData={setListData} />
      <Tasks workingArea={profile.workingArea} />
    </div>
  );
};


const mapStateToProps = (state) => {
  return ({
    profile: state.profilePage
  })
};


export default connect(mapStateToProps, {setListData})(Profile);