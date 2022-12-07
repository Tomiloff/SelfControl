import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink>
        <h1>SelfControl</h1>
      </NavLink>
    </div>
  );
};


export default Header;

