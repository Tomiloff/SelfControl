import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";


const NavbarItem = ({to, src, alt, className}) => {
  return (
    <NavLink to={to} className={styles.navbarItem}>
      <img src={src} alt={alt} className={className} />
    </NavLink>
  );
};

export default NavbarItem;