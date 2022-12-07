import Header from "../../features/Header/Header";
import Navbar from "../../features/Navbar/Navbar";
import Profile from "../../pages/Profile/Profile";
import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.appWraper}>
      <Header />
      <Navbar />
      <div className={styles.appWrapperContent}>
        <Profile></Profile>
      </div>
    </div>
  );
}


export default App;
