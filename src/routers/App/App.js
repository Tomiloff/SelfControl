import { Route, Routes } from "react-router-dom";
import Header from "../../common/Header/Header";
import Navbar from "../../common/Navbar/Navbar";
import Profile from "../../pages/Profile/Profile";
import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <div className={styles.appWrapperContent}>
        <Routes>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </div>
    </div>
  );
}


export default App;
