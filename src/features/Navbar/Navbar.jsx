import styles from './Navbar.module.css';
import avatarIcon from '../../assets/all-images/global-img/avatar.png';
import settingsIcon from '../../assets/all-images/icons/settings.svg';
import searchIcon from '../../assets/all-images/icons/search.svg';
import exitIcon from '../../assets/all-images/icons/exit.svg';
import NavbarItem from '../../components/navbar/NavbarItem';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarPanel}>
        <NavbarItem to={"/profile"} 
                    src={avatarIcon} 
                    alt={"avatar"} 
                    className={styles.navbarAvatar} ></NavbarItem>
        <NavbarItem to={"/settings"} 
                    src={settingsIcon} 
                    alt={"settings"} 
                    className={styles.navbarSettings} ></NavbarItem>
        <NavbarItem to={"/search"} 
                    src={searchIcon} 
                    alt={"search"} 
                    className={styles.navbarSearch} ></NavbarItem>
      </div>
      <div>
      <NavbarItem to={"/login"} 
                    src={exitIcon} 
                    alt={"exit"} 
                    className={styles.navbarExit} ></NavbarItem>
      </div>
    </div>
  );
};


export default Navbar;